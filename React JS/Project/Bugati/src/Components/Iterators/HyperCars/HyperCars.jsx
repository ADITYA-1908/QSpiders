import "./HyperCars.css";

const HyperCars = () => {
  const sections = [
    {
      id: 1,
      title: "DISCOVER BUGATI",
      items:
        "https://bugatti.imgix.net/67079f31fa42b0c51df1719b/bolide.png?auto=format,compress&cs=srgb&sharp=10&w=512&dpr=2",
      image:
        "https://bugatti.imgix.net/6733878496f2c0c4a773f58b/bugatti-bolide-card.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=688&fp-x=0.5&fp-y=0.5&dpr=2",
      buttonText: "LEARN MORE",
    },
    {
      id: 2,
      title: "Careers",
      items:
        "https://bugatti.imgix.net/67079cfafa42b0c51df16f7f/mistral.png?auto=format,compress&cs=srgb&sharp=10&w=512&dpr=2",
      image:
        "https://bugatti.imgix.net/67338aa2ed9d56f31c5f0689/bugatti-chiron-card-02.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=688&fp-x=0.5&fp-y=0.5&dpr=2",
      buttonText: "LEARN MORE",
    },
    {
      id: 3,
      title: "Careers",
      items:
        "https://bugatti.imgix.net/67079f31fa42b0c51df1719b/bolide.png?auto=format,compress&cs=srgb&sharp=10&w=512&dpr=2",
      image:
        "https://bugatti.imgix.net/6733878496f2c0c4a773f58b/bugatti-bolide-card.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=688&fp-x=0.5&fp-y=0.5&dpr=1.5",
      buttonText: "LEARN MORE",
    },
    {
      id: 4,
      title: "Careers",
      items:
        "https://bugatti.imgix.net/67079f94fa42b0c51df171b9/chiron.png?auto=format,compress&cs=srgb&sharp=10&w=512&dpr=2",
      image:
        "https://bugatti.imgix.net/67338aa2ed9d56f31c5f0689/bugatti-chiron-card-02.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=688&fp-x=0.5&fp-y=0.5&dpr=1.5",
      buttonText: "LEARN MORE",
    },
    {
      id: 5,
      title: "Careers",
      items:
        "https://bugatti.imgix.net/67079c56fa42b0c51df16e98/divo.png?auto=format,compress&cs=srgb&sharp=10&w=512&dpr=2",
      image:
        "https://bugatti.imgix.net/673387e8ed9d56f31c5f01c5/bugatti-divo-card.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=688&fp-x=0.5&fp-y=0.5&dpr=1.5",
      buttonText: "LEARN MORE",
    },
    {
      id: 6,
      title: "Careers",
      items:
        "https://bugatti.imgix.net/67079bbcfa42b0c51df16dda/centodieci.png?auto=format,compress&cs=srgb&sharp=10&w=512&dpr=2",
      image:
        "https://bugatti.imgix.net/6733881f96f2c0c4a773f5b2/bugatti-centodieci-card.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=688&fp-x=0.5&fp-y=0.5&dpr=1.5",
      buttonText: "LEARN MORE",
    },
  ];
  return (
    <div className="bugatti-page">
      <h1 className="bugatti-page-title">La Maison Bugatti</h1>
      <p className="bugatti-page-desc">
        Since 1909, the people at BUGATTI Automobiles create incomparable
        products and experiences by pushing the limits of aesthetics and
        dynamics.
      </p>
      <div className="bugatti-grid">
        {sections.map((section) => (
          <div key={section.id} className="bugatti-card">
            <div
              className="bugatti-bg"
              style={{ backgroundImage: `url(${section.image})` }}
            ></div>
            <div className="bugatti-content">
              <div className="bugatti-top">
                <h3 className="bugatti-title">{section.title}</h3>
                <img
                  src={section.items}
                  alt={section.title}
                  className="bugatti-logo"
                />
              </div>
              <button className="bugatti-btn">{section.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HyperCars;
