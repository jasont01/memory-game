const Card = (props) => {
  const { id, character, image } = props.character;

  return (
    <div className='card'>
      <img
        src={image}
        alt={character}
        className="card-art"
        onClick={() => {
          props.onClick(id);
        }}
      />
      <span className="card-text">{character}</span>
    </div>
  );
};

export default Card;
