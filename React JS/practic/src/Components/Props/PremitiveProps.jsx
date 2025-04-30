import React from "react";

const PrimitiveProps = ({ str, num, bool, nil, undef, big }) => {
  return (
    <div>
      <h2>Primitive Data Types</h2>
      <p>String: {str}</p>
      <p>Number: {num}</p>
      <p>Boolean: {bool.toString()}</p>
      <p>Null: {String(nil)}</p>
      <p>Undefined: {String(undef)}</p>
      <p>BigInt: {big.toString()}</p>
    </div>
  );
};

export default PrimitiveProps;
