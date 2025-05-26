import "./App.css";
import AutoSlider from "./Components/AutoSlider/AutoSlider.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Components/Home.jsx";
import BugatiLive from "./Components/Iterators/BugatiLive/BugatiLive.jsx";
import History from "./Components/Iterators/History/History.jsx";
import HyperCars from "./Components/Iterators/HyperCars/HyperCars.jsx";
import LearnMore from "./Components/Iterators/LearnMore/LearnMore.jsx";
function App() {
  return (
    <>
      <Home />
      <History />
      <HyperCars />
      <LearnMore />
      <AutoSlider />
      <BugatiLive />
      <Footer />
    </>
  );
}

export default App;
