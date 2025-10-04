import React from "react";

const Child = ({
  data: {
    name,
    age,
    address: { city, place },
  },
}) => {
  return (
    <div>
      <h5>{name}</h5>
      <h5>{age}</h5>
      <h5>{city}</h5>
      <h5>{place}</h5>
    </div>
  );
};

export default Child;
