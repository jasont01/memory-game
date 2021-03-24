import Card from './Card';
import characters from '../characters';

const Cards = () => {
  const handleClick = (id) => {
    console.log('click', id);
  };

  return (
    <div className="cards">
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            character={character}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default Cards;
