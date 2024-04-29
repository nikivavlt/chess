import React, { FC, useEffect, useRef, useState } from 'react'
import { Colors } from '../models/Colors';
import { Player } from '../models/Player';

interface TimerProps {
  currentPlayer: Player | null,
  restart: () => void;
}

// If time === zero for player - player lost game (implement)

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTimer, setBlackTimer] = useState(300);
  const [whiteTimer, setWhiteTimer] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }

    const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer
    timer.current = setInterval(callback, 1000)

  }

  function decrementBlackTimer() {
    setBlackTimer((previous) => previous - 1);
  }

  function decrementWhiteTimer() {
    setWhiteTimer((previous) => previous - 1);
  }

  const handleRestart = () => {
    setBlackTimer(300);
    setWhiteTimer(300);
    restart();
  }

  return (
    <div>
      <div>
        <button onClick={handleRestart}>Restart game</button>
      </div>
      <h2>Black time - {blackTimer}</h2>
      <h2>White time - {whiteTimer}</h2>
    </div>
  )
}

export default Timer