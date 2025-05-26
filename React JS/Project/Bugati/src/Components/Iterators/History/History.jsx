import "./History.css";

const History = () => {
  // Data for each section
  const sections = [
    {
      id: 1,
      title: "DISCOVER BUGATI",
      items: "If comparable, it is no longer BUGATTI",
      image:
        "https://bugatti.imgix.net/6734a2b6eae7ef2f6d1c330d/02%20BUGATTI_Custmer-Car-Gathering.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=688&fp-x=0.5&fp-y=0.5&dpr=2", // Replace with your image URL
      buttonText: "EXPLORE OUR HERITAGE",
    },
    {
      id: 2,
      title: "Careers",
      items: "Working at BUGATTI",
      image:
        "https://bugatti.imgix.net/6734a28b8d33578d8bd2af36/01%20BUGATTI_Type%2035%20Making%20of%20a%20Champion_edit.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=688&fp-x=0.5&fp-y=0.5&dpr=2",
      buttonText: "DISCOVER MILESTONES",
    },
    {
      id: 3,
      title: "WORKING AT BUGATTI",
      items: ["LASER MINE ABOUT CHINESE AT BUGATTI"],
      image:
        "https://bugatti.imgix.net/6734a52ceae7ef2f6d1c380c/AB105132_Crop.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=688&fp-x=0.5&fp-y=0.5&dpr=2",
      buttonText: "JOIN OUR TEAM",
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
      <div className="iterator">
        {sections.map((section) => (
          <div key={section.id} className="section-container">
            {/* Background Image */}
            <div
              className="section-background"
              style={{ backgroundImage: `url(${section.image})` }}
            ></div>

            {/* Content Overlay */}
            <div className="section-content">
              <div className="section-top-texts">
                <h3 className="section-title">{section.title}</h3>
                <h2 className="section-items">{section.items}</h2>
              </div>
              <button className="section-button">{section.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
