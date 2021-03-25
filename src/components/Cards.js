import { useState, useEffect } from 'react';
import Card from './Card';
import characters from '../characters';

const Cards = (props) => {
  const [cards, setCards] = useState(characters);
  const [clicks, setClicks] = useState([]);

  const handleClick = (id) => {
    clicks.includes(id) ? gameOver() : updateState(id);
  };

  const updateState = (id) => {
    setClicks([...clicks, id]);
    setCards(shuffleCards([...cards]));
  };

  const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const gameOver = () => {
    console.log('Game Over');
    setClicks([]);
  };

  useEffect(() => {
    props.onUpdate(clicks.length);
  }, [props, clicks]);

  return (
    <div className='cards'>
      {cards.map((card) => {
        return <Card key={card.id} character={card} onClick={handleClick} />;
      })}
    </div>
  );
};

export default Cards;
