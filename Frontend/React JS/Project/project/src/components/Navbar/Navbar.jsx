import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="img">
          <h2>LOGO</h2>
        </div>
        <div className="links">
          <ul className="ull">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact US</a>
            </li>
          </ul>
        </div>
        <div className="login">
          <button>login</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
