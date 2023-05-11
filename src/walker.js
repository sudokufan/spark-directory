import logo from './logo.svg';
import './walker.css';

function walker(name = 'Unknown', status = null, image = 'https://www.artofmtg.com/wp-content/uploads/2014/01/Totally-Lost-Art.jpg', source = 'https://mtg.fandom.com/wiki/Planeswalker/List_of_planeswalkers') {
  return (
    <div className='walkerWrapper'>
      <a href={source} target="_blank" rel="noopener noreferrer">
      <img src={image} className='walkerImage' alt={name}/>
      </a>
        <p>
          {name}
        </p>
    </div>
  );
}

export default App;
