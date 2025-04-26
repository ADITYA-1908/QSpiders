import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
const InputField = ({ placeholder, name }) => {
  return (
    <div className={"input-group"}>
      <input
        className="form-control border-0 py-3 mb-3 "
        placeholder={placeholder}
        name={name}
        style={{
          backgroundColor: "#eef5f3",
          borderRadius: "20px",
          width: "100px",
        }}
      />
    </div>
  );
};

export default InputField;
