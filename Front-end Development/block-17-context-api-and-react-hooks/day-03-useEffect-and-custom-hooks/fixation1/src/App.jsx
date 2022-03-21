import { useState, useEffect, useRef } from 'react';

function useTimer() {
  const [timer, setTimer] = useState(10);
  const [number, setNumber] = useState(1);
  const [isMultiple, setMultiple] = useState(false);
  const intervalRef = useRef(0);

  const checkIfNumberIsMultiple = (number) => {
    if (number % 3 === 0 || number % 5 === 0) {
      setMultiple(true);
      setTimeout(() => setMultiple(false), 4000);
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const randomNumber = Math.round(Math.random() * 100);
      checkIfNumberIsMultiple(randomNumber);
      setNumber(randomNumber);
      setTimer(11);
    }, 10000);

    const timerInterval = setInterval(() => {
      setTimer((prevState) => prevState - 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
      clearInterval(timerInterval);
    };
  }, []);

  return { number, isMultiple, timer };
}

function App() {
  const { number, isMultiple, timer } = useTimer();
  return (
    <div>
      <p>{`Random number: ${number}`}</p>
      <p>{isMultiple && 'Hit'}</p>
      <p>{`Timer: ${timer} seconds`}</p>
    </div>
  );
}

export default App;
