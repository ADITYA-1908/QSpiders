import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? "show" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <a href="#">LA MARQUE</a>
          <a href="#">HYPER SPORTS CARS</a>
          <a href="#">LIFESTYLE</a>
        </div>
        <div className="navbar-center">BUGATTI</div>
        <div className="navbar-right">
          <a href="#">NEWSROOM</a>
          <a href="#">STORE</a>
          <a href="#">EN</a>
          <a href="#">FR</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
