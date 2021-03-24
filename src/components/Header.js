const Header = () => {
  return (
    <div className='header'>
      <div className='title-wrapper'>
        <img className='logo' src='img/critical-role.png' alt='critrole' />
        <h1 className='title'>Memory Game</h1>
      </div>
      <span>
        Get points by clicking on an image<br/> but don't click on any of them more
        than once!
      </span>
    </div>
  );
};

export default Header;
