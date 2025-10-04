import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Signin from "./Auth/Signin.jsx";
import Signup from "./Auth/Signup.jsx";
import "./index.css";
import Layout from "./Layout.jsx";
import NoLayout from "./NoLayout.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import DashBoard from "./Pages/DashBoard/DashBoard.jsx";
import AllUser from "./Pages/DashBoard/DashBoardPages/AllUser.jsx";
import AllUsers from "./Pages/DashBoard/DashBoardPages/CreateUser.jsx";
import EditUser from "./Pages/DashBoard/DashBoardPages/EditUser.jsx";
import Profile from "./Pages/DashBoard/DashBoardPages/Profile.jsx";
import Setting from "./Pages/DashBoard/DashBoardPages/Setting.jsx";
import Github, { githubInfoLoader } from "./Pages/Github/Github.jsx";
import Home from "./Pages/Home/Home.jsx";
import ProtectedRoute from "./PrivateRouting/ProtectedRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        >
          <Route path="create-users" element={<AllUsers />} />
          <Route path="all-users" element={<AllUser />} />

          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="/edituser/:slug" element={<EditUser />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route loader={githubInfoLoader} path="github" element={<Github />} />
      </Route>

      <Route element={<NoLayout />}>
        <Route path="/" element={<Signin />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
