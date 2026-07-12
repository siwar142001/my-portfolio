import { useEffect, useRef, useState } from 'react';
import styles from './AudioPlayer.module.css';

interface AudioPlayerProps {
  shouldPlay?: boolean;
}

export function AudioPlayer({ shouldPlay = false }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!audioRef.current) return;
    // Ensure element attributes are set as early as possible
    audioRef.current.loop = true;
    // Force the muted attribute on the element for initial render
    audioRef.current.muted = true;

    // Try to start playback. Most browsers allow muted autoplay.
    audioRef.current
      .play()
      .then(() => {
        // Playback started (muted)
        setIsMuted(true);
      })
      .catch(() => {
        // Autoplay with media can be blocked; remain muted until user interacts.
        setIsMuted(true);
      });
  }, []);

  useEffect(() => {
    if (!shouldPlay || !audioRef.current) return;
    audioRef.current.muted = false;
    audioRef.current.play().catch(() => {});
    setIsMuted(false);
  }, [shouldPlay]);

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !audioRef.current.muted;
    audioRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    // If we unmute, ensure playback is running
    if (!nextMuted) audioRef.current.play().catch(() => {});
  };

  return (
    <div className={styles.player}>
      {/* Use the plain HTML muted attribute to increase autoplay reliability */}
      <audio ref={audioRef} src="/ocean-ambiance.mp3" preload="auto" autoPlay loop muted />
      <button
        type="button"
        aria-label={isMuted ? 'Activer musique océan' : 'Couper musique océan'}
        className={`${styles.shellButton} ${isMuted ? styles.muted : styles.unmuted}`}
        onClick={toggleMute}
      >
        🐚
      </button>
    </div>
  );
}
