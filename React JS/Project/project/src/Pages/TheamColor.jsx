import React, { useState } from "react";
import ColorButton from "../Props/colorButton.jsx";

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "pink",
  "magenta",
  "lime",
  "teal",
  "aqua",
  "gray",
  "silver",
  "gold",
  "coral",
  "violet",
  "turquoise",
  "tomato",
  "salmon",
  "khaki",
  "lavender",
  "beige",
  "crimson",
  "lightblue",
  "lightgreen",
  "lightpink",
];

function TheamColor() {
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("black");

  return (
    <div className="container-fluid p-2">
      <h1 className="text-center mb-4">Implementation of UseState</h1>
      <div className="row">
        <div className="col-md-6 h-full" style={{ backgroundColor: bgColor }}>
          <h4>Change Background Color</h4>
          <div className="d-flex flex-wrap">
            {colors.map((color) => (
              <ColorButton color={color} onClick={setBgColor} />
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <h4>Change Text Color</h4>
          <div className="mt-5 p-4 border rounded" style={{ color: textColor }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo ea
              dignissimos tempore voluptates! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Iste, at.
            </p>
          </div>
          <div className="d-flex flex-wrap">
            {colors.map((color) => (
              <ColorButton color={color} onClick={setTextColor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheamColor;
