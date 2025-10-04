import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Section1 from "./Pages/Section1";

const Routing = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
        </div>
      ),
    },
    {
      path: "/about",
      element: (
        <div>
          <Navbar />
          <About />
        </div>
      ),
    },
    {
      path: "/login",
      element: (
        <div>
          <Navbar />
          <Login />
        </div>
      ),
    },
    {
      path: "/register",
      element: (
        <div>
          <Navbar />
          <Register />
        </div>
      ),
    },
    {
      path: "/section1",
      element: <Section1 />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default Routing;
