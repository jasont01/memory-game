import { useState } from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  const [score, setScore] = useState(0);

  const updateScore = (currentScore) => setScore(currentScore);

  return (
    <div className='container bg'>
      <div className='flex-wrapper'>
        <Header />
        <Scoreboard score={score} />
      </div>
      <Cards onUpdate={updateScore} />
      <Footer />
    </div>
  );
}

export default App;
