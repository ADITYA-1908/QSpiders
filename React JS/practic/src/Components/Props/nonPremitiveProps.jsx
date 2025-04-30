import React from "react";

const NonPrimitiveProps = ({ obj, arr, func }) => {
  return (
    <div>
      <h2>Non-Primitive Data Types</h2>
      <p>Object: {JSON.stringify(obj)}</p>
      <p>Array: {arr.join(", ")}</p>
      <p>Function: {func()}</p>
    </div>
  );
};

export default NonPrimitiveProps;
