import {useState, useEffect} from 'react';

export default function useInterval(
  f: () => void,
  delay = 1000,
): [Function, Function, boolean] {
  const [running, setRunning] = useState(false);

  useEffect(() => {
    // start
    if (!running) return;
    setRunning(true);
    const t = setInterval(f, delay);

    // stop
    return () => {
      setRunning(false);
      clearInterval(t);
    };
  }, [f, running, delay]);

  return [
    () => setRunning(true), // start
    () => setRunning(false), // stop
    running, // running
  ];
}
