import { useRef, useState } from 'react';
import whaleImage from './assets/img/effects/whale.png';
import { OceanCanvas } from './components/layout/OceanCanvas';
import { Sidebar } from './components/layout/Sidebar';
import { DepthRuler } from './components/layout/DepthRuler';
import { LandingExperience } from './components/landing/LandingExperience';
import { EasterEggs } from './components/effects/EasterEggs';
import { SonarCursor } from './components/effects/SonarCursor';
import { DevTerminal } from './components/effects/DevTerminal';
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
  const [hasEntered, setHasEntered] = useState(false);
  const [shouldPlayAudio, setShouldPlayAudio] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const depthCursorRef = useRef<HTMLDivElement>(null);
  const depthReadRef = useRef<HTMLDivElement>(null);

  useOceanScene(canvasRef, depthCursorRef, depthReadRef);

  return (
    <div className={styles.page}>
      {!hasEntered && (
        <LandingExperience
          onEnterStart={() => setShouldPlayAudio(true)}
          onEnter={() => setHasEntered(true)}
        />
      )}
      <OceanCanvas canvasRef={canvasRef} />
      <div className={styles.ambientLife} aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className={styles.ambientCreatures} aria-hidden="true">
        <img src={whaleImage} alt="" className={styles.ambientWhale} />
        <div className={styles.ambientJellyfish}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <Sidebar />
      <DepthRuler cursorRef={depthCursorRef} readRef={depthReadRef} />
      <EasterEggs />
      <SonarCursor />
      <DevTerminal />

      <main className={styles.main}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <AudioPlayer shouldPlay={shouldPlayAudio} />
    </div>
  );
}

export default App;
