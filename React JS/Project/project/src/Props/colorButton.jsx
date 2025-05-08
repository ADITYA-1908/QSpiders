import React from "react";
import Button from "react-bootstrap/Button";

const ColorButton = ({ color, onClick }) => {
  return (
    <Button
      variant="light"
      onClick={() => onClick(color)}
      style={{
        backgroundColor: color,
        border: "1px solid #ccc",
        margin: "5px",
        width: "100px",
        height: "40px",
      }}
    >
      {color}
    </Button>
  );
};

export default ColorButton;
