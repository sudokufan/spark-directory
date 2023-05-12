import logo from './logo.svg';
import './walker.css';

const walker = (
  name = 'Unknown',
  status = 'unknown',
  image = 'https://www.artofmtg.com/wp-content/uploads/2014/01/Totally-Lost-Art.jpg',
  source = 'https://mtg.fandom.com/wiki/Planeswalker/List_of_planeswalkers',
  description = 'Unknown'
  ) => {

  return (
    <div className={`walkerWrapper ${status}`}>
      <a href={source} target="_blank" rel="noopener noreferrer">
      <img src={image} className='walkerImage' alt={name}/>
      <section class='walkerText'>
        <span>{name}</span>
        <span>{description}</span>
      </section>
      </a>
        <p>
          {name}
        </p>
    </div>
  );
}

export default Walker;
