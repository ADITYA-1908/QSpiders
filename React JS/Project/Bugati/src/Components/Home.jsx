import Navbar from "../Components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* First Section */}
      <div className="section">
        {/* Background Video */}
        <video autoPlay muted loop className="background-video">
          <source
            src="https://stream.media.imgix.video/PZ027eCBXFU22eWr1PKRD62RWaSW7koVL/high.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Navbar Above the Video */}
        <Navbar />

        {/* Content overlay */}
        <div className="content-overlay">
          <h1 className="main-heading">THIS IS FOR</h1>
          <h1 className="main-heading">ETERNITY</h1>
          <div className="main-cover">
            <button className="sub-heading">
              DISCOVER THE BUGATTI TOURBILLON
            </button>
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="latest-news-section">
        {/* Top Heading */}
        <h1 className="news-main-title">OUR LATEST NEWS</h1>

        {/* Video Wrapper with overlay text on top */}
        <div className="news-video-container">
          <video autoPlay muted loop className="news-bg-video">
            <source
              src="https://stream.media.imgix.video/RxtF23ZnWoOoJAUtKnaAaJI18Vof00ySD/high.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Text on top of the video */}
          <div className="news-video-content">
            <h2 className="news-subtitle">A RECORD-BREAKING FORCE OF NATURE</h2>
            <p className="news-description">
              Setting a new benchmark at 453.91 km/h. A triumph of passion,
              precision, and performance.
            </p>
            <div className="main-cover">
              <button className="sub-heading">MATCH THE RECODES</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
