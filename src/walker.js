import './walker.css';

const Walker = (
  name = 'Unknown',
  status = 'unknown',
  image = 'https://www.artofmtg.com/wp-content/uploads/2014/01/Totally-Lost-Art.jpg',
  source = 'https://mtg.fandom.com/wiki/Planeswalker/List_of_planeswalkers',
  description = 'Unknown'
  ) => {

  const data = name;

  return (
    <div className={`walkerWrapper ${data.status}`}>
      <a href={data.source} target="_blank" rel="noopener noreferrer">
      <img src={data.image} className='walkerImage' alt={data.name}/>
      <section class='walkerText'>
        <span>{data.name}</span>
        <span>{data.description}</span>
      </section>
      </a>
        <p>
          {data.name}
        </p>
    </div>
  );
}

export default Walker;
