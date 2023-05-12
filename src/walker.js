import "./walker.css";

const Walker = (data) => {
  const walkerInfo = data.data;

  return (
    <div className="parent">
      <div
        className={`walkerWrapper ${
          walkerInfo.status ? walkerInfo.status : "unknown"
        }`}
      >
        <a href={walkerInfo.source} target="_blank" rel="noopener noreferrer">
          <img
            src={
              walkerInfo.image
                ? walkerInfo.image
                : "https://www.artofmtg.com/wp-content/uploads/2014/01/Totally-Lost-Art.jpg"
            }
            className="walkerImage"
            alt={walkerInfo.name}
            referrerPolicy="no-referrer"
          />
          <span className="description">
            {walkerInfo.description ? walkerInfo.description : "Unknown"}
          </span>
        </a>
      </div>
      <span className="name">
        {walkerInfo.name ? walkerInfo.name : "Unknown"}
      </span>
    </div>
  );
};

export default Walker;
