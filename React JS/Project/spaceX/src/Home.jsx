import React from "react";
import Vdo from "./assets/spaceX-video.mp4";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import PageComponent from "./Components/Pages";

const Home = () => {
  const pagesData = [
    {
      isVideo: true,
      backgroundMedia: Vdo,
      line1: "RECENT LAUNCH",
      line2: "STARSHIPS'S SIXTH FLIGHT TEST",
      btn: "REWATECH",
    },
    {
      backgroundMedia:
        "https://spacex1-clone.netlify.app/assets/rocket-fire-D5D81tSi.jpg",
      line1: "RECENT LAUNCH",
      line2: "SXM-9 MISSION",
      btn: "REWATECH",
    },
    {
      backgroundMedia:
        "https://spacex1-clone.netlify.app/assets/stars-DYuU5mOz.jpg",
      line1: "Falcon 9",
      line2: "STARLINK MISSION",
      btn: "MORE",
    },
    {
      backgroundMedia:
        "https://spacex1-clone.netlify.app/assets/Starlink-Bruuxwb4.jpg",
      line1: "Falcon 9",
      line2: "STARLINK MISSION",
      btn: "REWATECH",
    },
    {
      backgroundMedia:
        "https://spacex1-clone.netlify.app/assets/astronaut-PR2OUO69.jpg",
      line1: "Falcon 9",
      line2: "ADVANCE HUMAN SPACEFLIGHT",
      btn: "MORE",
    },
    {
      backgroundMedia:
        "https://spacex1-clone.netlify.app/assets/launch-CIKREtYa.jpg",
      line1: "Falcon 9",
      line2: "TO MAKE LIFE MULTIPLANETARY",
      btn: "REWATECH",
    },
  ];

  return (
    <>
      <Navbar />
      {pagesData.map((props, index) => (
        <PageComponent key={index} {...props} />
      ))}
      <Footer />
    </>
  );
};

export default Home;
