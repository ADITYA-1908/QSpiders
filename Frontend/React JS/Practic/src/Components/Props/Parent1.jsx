import React from "react";
import Child from "./Child";

const Parent1 = () => {
  const userData = {
    name: "aditya",
    age: "21",
    address: {
      city: "bhu",
      place: "nayapali",
    },
  };

  return <Child data={userData} />;
};

export default Parent1;
