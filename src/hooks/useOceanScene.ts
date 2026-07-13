import { useEffect } from 'react';
import type { RefObject } from 'react';
import { SECTION_IDS } from '../data/portfolio';

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const rand = (a: number, b: number) => a + Math.random() * (b - a);
const smooth = (e0: number, e1: number, x: number) => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};

interface Particle {
  x: number;
  y: number;
  r: number;
  sp: number;
  dx: number;
}

interface DustParticle extends Particle {
  ph: number;
  tw: number;
}

interface BioParticle {
  x: number;
  y: number;
  r: number;
  ph: number;
  sp: number;
  big: boolean;
}

interface Bubble {
  x: number;
  y: number;
  r: number;
  sp: number;
  w: number;
}

interface Burst {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  life: number;
}

/**
 * Drives the full-page ocean depth experience: canvas particle field, the
 * depth-ruler cursor/readout, and sidebar active-link highlighting all stem
 * from the same scroll-derived depth value, so they share one rAF loop.
 */
export function useOceanScene(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  depthCursorRef: RefObject<HTMLDivElement | null>,
  depthReadRef: RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const snow: Particle[] = Array.from({ length: 150 }, () => ({
      x: rand(0, 1),
      y: rand(0, 1),
      r: rand(0.4, 2.1),
      sp: rand(0.0002, 0.0009),
      dx: rand(-0.0003, 0.0003),
    }));
    const dust: DustParticle[] = Array.from({ length: 90 }, () => ({
      x: rand(0, 1),
      y: rand(0, 1),
      r: rand(0.5, 2),
      sp: rand(-0.0005, -0.0001),
      dx: rand(-0.0004, 0.0004),
      ph: rand(0, 6.28),
      tw: rand(0.02, 0.05),
    }));
    const bio: BioParticle[] = Array.from({ length: 70 }, () => ({
      x: rand(0, 1),
      y: rand(0, 1),
      r: rand(1, 3),
      ph: rand(0, 6.28),
      sp: rand(0.01, 0.03),
      big: Math.random() < 0.12,
    }));
    const bubbles: Bubble[] = Array.from({ length: 55 }, () => ({
      x: rand(0, 1),
      y: rand(0, 1),
      r: rand(1, 4),
      sp: rand(0.0008, 0.0024),
      w: rand(0, 6.28),
    }));

    const bursts: Burst[] = [];
    const onPointerDown = (e: PointerEvent) => {
      for (let i = 0; i < 16; i++) {
        bursts.push({ x: e.clientX, y: e.clientY, vx: rand(-0.5, 0.5), vy: rand(-1.6, -0.5), r: rand(1.5, 5.5), life: 1 });
      }
    };
    window.addEventListener('pointerdown', onPointerDown);

    let t = 0;
    let rafId = 0;
    let lastScrollY = window.scrollY;
    let lastFrameTime = performance.now();

    const frame = () => {
      t += 1;
      const total = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const d = clamp(window.scrollY / total, 0, 1);
      const now = performance.now();
      const frameDelta = Math.max(16, now - lastFrameTime);
      const scrollSpeed = clamp(Math.abs(window.scrollY - lastScrollY) / frameDelta, 0, 2.8);
      const speedBoost = smooth(0.05, 1.6, scrollSpeed);
      lastScrollY = window.scrollY;
      lastFrameTime = now;

      document.documentElement.style.setProperty('--dive-depth', d.toFixed(4));
      document.documentElement.style.setProperty('--dive-speed', speedBoost.toFixed(4));
      document.documentElement.style.setProperty('--dive-bg-shift', `${Math.round(d * -63)}px`);
      document.documentElement.style.setProperty('--dive-ray-shift', `${Math.round(d * -50)}px`);
      document.documentElement.style.setProperty('--dive-caustic-shift', `${Math.round(d * -32)}px`);
      document.documentElement.style.setProperty('--dive-life-shift', `${Math.round(d * -28)}px`);
      document.documentElement.style.setProperty('--dive-creature-shift', `${Math.round(d * -61)}px`);
      document.documentElement.style.setProperty('--dive-darkness', (0.08 + d * 0.42).toFixed(4));
      ctx.clearRect(0, 0, W, H);

      const rayA = 1 - smooth(0.12, 0.5, d);
      if (rayA > 0.01) {
        for (let i = 0; i < 6; i++) {
          const bx = (i / 6 + Math.sin(t * 0.0013 + i * 1.7) * 0.05 + 0.05) * W;
          const g = ctx.createLinearGradient(bx, 0, bx + 60, H);
          g.addColorStop(0, `rgba(150,205,240,${0.1 * rayA})`);
          g.addColorStop(1, 'rgba(150,205,240,0)');
          ctx.save();
          ctx.translate(bx, 0);
          ctx.transform(1, 0, -0.3, 1, 0, 0);
          ctx.fillStyle = g;
          ctx.fillRect(-38, 0, 110, H);
          ctx.restore();
        }
      }

      const snowA = 0.25 + 0.6 * smooth(0.05, 0.95, d);
      ctx.fillStyle = `rgba(205,228,244,${0.5 * snowA})`;
      for (const p of snow) {
        p.y += p.sp * (1 + d + speedBoost * 4.2);
        p.x += p.dx;
        if (p.y > 1) {
          p.y = 0;
          p.x = rand(0, 1);
        }
        ctx.beginPath();
        ctx.arc(p.x * W, p.y * H, p.r, 0, 6.2832);
        ctx.fill();
      }

      const dustA = 0.35 * (1 - 0.4 * smooth(0.6, 1, d));
      for (const p of dust) {
        p.y += p.sp;
        p.x += p.dx;
        p.ph += p.tw;
        if (p.y < 0) {
          p.y = 1;
          p.x = rand(0, 1);
        }
        const tw = 0.4 + 0.6 * (Math.sin(p.ph) * 0.5 + 0.5);
        ctx.fillStyle = `rgba(150,195,230,${dustA * tw})`;
        ctx.beginPath();
        ctx.arc(p.x * W, p.y * H, p.r, 0, 6.2832);
        ctx.fill();
      }

      const bioA = smooth(0.45, 0.95, d);
      if (bioA > 0.01) {
        for (const p of bio) {
          p.ph += p.sp;
          const pulse = Math.sin(p.ph) * 0.5 + 0.5;
          const rr = p.big ? p.r * 13 : p.r * 3.2;
          const g = ctx.createRadialGradient(p.x * W, p.y * H, 0, p.x * W, p.y * H, rr);
          const a = bioA * pulse * (p.big ? 0.24 : 0.75);
          g.addColorStop(0, `rgba(120,215,245,${a})`);
          g.addColorStop(1, 'rgba(90,190,230,0)');
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(p.x * W, p.y * H, rr, 0, 6.2832);
          ctx.fill();
        }
      }

      ctx.strokeStyle = `rgba(190,225,240,${0.3 + 0.2 * (1 - d)})`;
      ctx.lineWidth = 1;
      for (const b of bubbles) {
        b.y -= b.sp * (1 + speedBoost * 2.4);
        b.w += 0.03;
        if (b.y < -0.02) {
          b.y = 1.02;
          b.x = rand(0, 1);
        }
        const px = (b.x + Math.sin(b.w) * 0.01) * W;
        ctx.beginPath();
        ctx.arc(px, b.y * H, b.r, 0, 6.2832);
        ctx.stroke();
      }

      const vig = smooth(0.25, 1, d);
      if (vig > 0.01) {
        const vg = ctx.createRadialGradient(W / 2, H / 2, H * 0.25, W / 2, H / 2, H * 0.85);
        vg.addColorStop(0, 'rgba(0,0,0,0)');
        vg.addColorStop(1, `rgba(0,4,12,${vig * 0.5})`);
        ctx.fillStyle = vg;
        ctx.fillRect(0, 0, W, H);
      }

      ctx.strokeStyle = 'rgba(200,235,248,.85)';
      ctx.lineWidth = 1.3;
      for (let i = bursts.length - 1; i >= 0; i--) {
        const b = bursts[i];
        b.x += b.vx;
        b.y += b.vy;
        b.vy -= 0.01;
        b.life -= 0.012;
        if (b.life <= 0) {
          bursts.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = clamp(b.life, 0, 1);
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, 6.2832);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      const meters = Math.round(d * 1000);
      const topPct = 8 + d * 84;
      const cur = depthCursorRef.current;
      const rd = depthReadRef.current;
      if (cur) cur.style.top = `${topPct}%`;
      if (rd) {
        rd.style.top = `${topPct}%`;
        rd.textContent = `${meters} m`;
      }

      const mid = window.scrollY + window.innerHeight * 0.4;
      let active: string = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) active = id;
      }
      document.querySelectorAll<HTMLElement>('.navlink').forEach((lk) => {
        const on = lk.getAttribute('data-nav') === active;
        lk.style.color = on ? '#37b0ff' : 'rgba(213,231,244,.62)';
        lk.style.background = on ? 'rgba(55,176,255,.1)' : 'transparent';
      });

      rafId = requestAnimationFrame(frame);
    };
    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointerdown', onPointerDown);
      [
        '--dive-depth',
        '--dive-speed',
        '--dive-bg-shift',
        '--dive-ray-shift',
        '--dive-caustic-shift',
        '--dive-life-shift',
        '--dive-creature-shift',
        '--dive-darkness',
      ].forEach((property) => document.documentElement.style.removeProperty(property));
    };
  }, [canvasRef, depthCursorRef, depthReadRef]);
}
