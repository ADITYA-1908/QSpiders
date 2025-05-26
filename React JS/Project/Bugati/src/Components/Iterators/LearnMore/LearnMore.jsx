import "./LearnMore.css";

const LearnMore = () => {
  return (
    <>
      <div className="bugatti-header">
        <h1 className="bugatti-title">BUGATTI SUR MESURE</h1>
        <p className="bugatti-subtitle">
          The pinnacle of automotive engineering and ultra-luxury lifestyle.
        </p>
      </div>
      <div className="bugatti-container">
        <div className="bugatti-left">
          <img
            src="https://bugatti.imgix.net/67346e73c5aae03fb24d085d/04_bugatti_chiron_macaron.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=798&fp-x=0.5&fp-y=0.5&dpr=2"
            alt="Bugatti Badge"
            className="bugatti-img"
          />
        </div>

        <div className="bugatti-right">
          <h2 className="bugatti-heading">
            HERITAGE, CRAFTSMANSHIP AND INNOVATION
          </h2>
          <p className="bugatti-description">
            At <strong>BUGATTI</strong>, we translate our customers’ visions to
            create unique pieces of personalized automotive art.
          </p>
          <button className="bugatti-button">
            LEARN MORE ABOUT SUR MESURE
          </button>
        </div>
      </div>
    </>
  );
};

export default LearnMore;
