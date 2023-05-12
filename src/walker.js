import "./walker.css";

const Walker = (data) => {
  const walkerInfo = data.data;

  console.log(walkerInfo);

  return (
    <div className="parent">
      <div className={`walkerWrapper ${walkerInfo.status}`}>
        <a href={walkerInfo.source} target="_blank" rel="noopener noreferrer">
          <img
            src={walkerInfo.image}
            className="walkerImage"
            alt={walkerInfo.name}
            referrerPolicy="no-referrer"
          />
          <section className="walkerText">
            <span>{walkerInfo.description}</span>
          </section>
        </a>
      </div>
      <p>{walkerInfo.name}</p>
    </div>
  );
};

export default Walker;
