import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
const SocialButton = ({ icon, color }) => {
  return (
    <button
      type="button"
      className="btn rounded-circle d-flex align-items-center justify-content-center"
      style={{
        width: "46px",
        height: "46px",
        backgroundColor: color,
        color: "#ffffff",
      }}
    >
      {icon}
    </button>
  );
};

export default SocialButton;
