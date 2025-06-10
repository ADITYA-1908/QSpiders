import React from "react";

const DefaultProps = ({ name = "subham", age = "22" }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  );
};

export default DefaultProps;
