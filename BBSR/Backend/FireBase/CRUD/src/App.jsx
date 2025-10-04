import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./Auth/Signin";
import Signup from "./Auth/Signup";
import Dashboard from "./Pages/Dashboad";
import Home from "./Pages/Home";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
