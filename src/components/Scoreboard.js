import { useState, useEffect } from 'react';

const Scoreboard = (props) => {
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    props.score > bestScore && setBestScore(props.score);
  }, [props.score, bestScore]);

  return (
    <div className='scoreboard'>
      <div>Current Score: {props.score}</div>
      <div>Best Score: {bestScore}</div>
    </div>
  );
};

export default Scoreboard;
