import { useRef } from 'react';
import { OceanCanvas } from './components/layout/OceanCanvas';
import { Sidebar } from './components/layout/Sidebar';
import { DepthRuler } from './components/layout/DepthRuler';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Timeline } from './components/sections/Timeline';
import { Contact } from './components/sections/Contact';
import { AudioPlayer } from './components/ui/AudioPlayer';
import { useOceanScene } from './hooks/useOceanScene';
import styles from './App.module.css';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const depthCursorRef = useRef<HTMLDivElement>(null);
  const depthReadRef = useRef<HTMLDivElement>(null);

  useOceanScene(canvasRef, depthCursorRef, depthReadRef);

  return (
    <div className={styles.page}>
      <OceanCanvas canvasRef={canvasRef} />
      <Sidebar />
      <DepthRuler cursorRef={depthCursorRef} readRef={depthReadRef} />

      <main className={styles.main}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <AudioPlayer />
    </div>
  );
}

export default App;
