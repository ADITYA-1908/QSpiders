import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
const Buttons = ({ text,bgcolor ,Tcolor}) => {
  return (
    <button
      type="button"
      className={" py-3 mt-3  border"}
      style={{
        backgroundColor: bgcolor,
        color: Tcolor,
        borderRadius: "10rem",
        width:"250px"
      }}
    >
      {text}
    </button>
  );
};

export default Buttons;
