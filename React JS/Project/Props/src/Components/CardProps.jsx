import React from "react";

const CardProps = ({ image, name, price }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <img
          src={image}
          className="card-img-top p-3"
          style={{
            height: "300px",
            width: "300px",
          }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Price: ₹{price}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProps;
