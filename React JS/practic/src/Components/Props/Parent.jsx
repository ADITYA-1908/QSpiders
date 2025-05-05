import React from "react";
import Child from "./Child";

const Parent = () => {
  const userData = {
    name: "aditya",
    age: "21",
    address: {
      city: "bhu",
      place: "nayapali",
    },
  };

  return <Child data={userData} />;
  //   without prop key how to send the data
};

export default Parent;
