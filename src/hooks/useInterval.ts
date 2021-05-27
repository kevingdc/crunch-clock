import {useState, useEffect, useRef} from 'react';

export default function useInterval(
  f: () => void,
  delay = 1000,
): [Function, Function, boolean] {
  const [running, setRunning] = useState(false);
  const intervalCallback = useRef(f);

  useEffect(() => {
    intervalCallback.current = f;
  }, [f]);

  useEffect(() => {
    // start
    if (!running) return;
    setRunning(true);
    const intervalId = setInterval(() => intervalCallback.current(), delay);

    // stop
    return () => {
      setRunning(false);
      clearInterval(intervalId);
    };
  }, [running, delay]);

  return [
    () => setRunning(true), // start
    () => setRunning(false), // stop
    running, // running
  ];
}
