import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import styles from './DevTerminal.module.css';

interface Line {
  id: number;
  text: string;
  kind?: 'input' | 'success';
}

const responses: Record<string, string[]> = {
  help: ['Commandes disponibles: help, about, skills, projects, contact, clear, sudo hire siwar'],
  about: ['Siwar - developpeuse full-stack, orientee interfaces immersives et experiences web.'],
  skills: ['React, TypeScript, Laravel, Flutter, Java, Unity, SQL, Git, UI/UX.'],
  projects: ['Ouvre la salle des trophees: chaque capsule contient un projet interactif.'],
  contact: ['Transmission directe: section Contact ou email depuis la radio de sous-marin.'],
  'sudo hire siwar': ['Access Granted :)'],
};

export function DevTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const [lines, setLines] = useState<Line[]>([
    { id: 1, text: 'terminal-siwar v1.0' },
    { id: 2, text: 'Tape help pour afficher les commandes.' },
  ]);
  const nextId = useRef(3);

  const pushLines = (newLines: Omit<Line, 'id'>[]) => {
    setLines((current) => [
      ...current,
      ...newLines.map((line) => ({ ...line, id: nextId.current++ })),
    ]);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const command = value.trim().toLowerCase();
    if (!command) return;
    setValue('');

    if (command === 'clear') {
      setLines([]);
      return;
    }

    const output = responses[command] ?? [`Commande inconnue: ${command}. Tape help.`];
    const kind: Line['kind'] = command === 'sudo hire siwar' ? 'success' : undefined;
    pushLines([{ text: `> ${command}`, kind: 'input' }, ...output.map((text) => ({ text, kind }))]);
  };

  return (
    <div className={styles.terminal}>
      {isOpen && (
        <div className={styles.panel}>
          <div className={styles.header}>
            <span>submarine-terminal</span>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Fermer le terminal">
              x
            </button>
          </div>
          <div className={styles.output}>
            {lines.map((line) => (
              <p key={line.id} className={line.kind ? styles[line.kind] : undefined}>
                {line.text}
              </p>
            ))}
          </div>
          <form className={styles.prompt} onSubmit={submit}>
            <span>&gt;</span>
            <input
              value={value}
              onChange={(event) => setValue(event.target.value)}
              aria-label="Commande terminal"
              autoFocus
            />
          </form>
        </div>
      )}
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setIsOpen((current) => !current)}
        aria-label="Ouvrir le terminal"
      >
        &gt;
      </button>
    </div>
  );
}
