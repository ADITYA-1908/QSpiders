import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Pic from "../../assets/pic.jpg";
import "./Card.css";
const Card = () => {
  const name = "Aditya Basantia";
  const rollno = "202110178";
  const registrationNo = "2101202016";
  const college = "NIST University";
  const location = "Pallur Hill, Golenthora, Berhampur - 760003";
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center vh-100 bg-light">
      <div className="card text-center shadow p-4">
        <h3 className="mb-3">{college}</h3>
        <img
          src={Pic}
          className="card-img-top rounded-circle mx-auto"
          alt="Profile"
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="card-text mb-1">
            <strong>Roll No:</strong> {rollno}
          </p>
          <p className="card-text mb-1">
            <strong>Registration No:</strong> {registrationNo}
          </p>

          <p className="card-text">
            <strong>Location:</strong> {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
