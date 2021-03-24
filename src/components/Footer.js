const Footer = () => {
  return (
    <div className='footer'>
      <h4 className='about-header'>About</h4>

      <p>
        Project created as an assignment from{' '}
        <a href='https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/memory-card'>
          The Odin Project
        </a>
        's JavaScript curriculum
      </p>
      <div className='credits'>
        <span>
          Artwork: <a href='https://twitter.com/ornerine'>@ornerine</a>
        </span>
        <span>
          Characters: <a href='https://critrole.com'>Critical Role</a>
        </span>
        <span>
          Github: <a href='https://github.com/jasont01/memory-game'>jasont01</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
