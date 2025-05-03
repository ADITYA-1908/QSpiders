import React from "react";

const NavigationElement = ({ links }) => {
  return (
    <div className="d-none d-md-flex gap-3 text-white fw-semibold">
      {links.map((link, index) => (
        <div key={index} className="nav-link text-uppercase" role="button">
          {link}
        </div>
      ))}
    </div>
  );
};

export default NavigationElement;
