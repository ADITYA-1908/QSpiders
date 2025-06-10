import React from "react";
import DefaultProps from "./DefaultProps.jsx";

const Parent = () => {
  const userData = {
    name: "aditya",
    age: "21",
    address: {
      city: "bhu",
      place: "nayapali",
    },
  };
  const arr = ["adi", "aditya", "subham"];

  return (
    <div>
      {/* <Child data={userData} /> */}
      {/* without prop key how to send the data */}
      {/* <Child1 {...userData} /> */}
      {/* <Child1 data={arr} /> */}

      {/* defoult props */}
      <DefaultProps {...userData} />
      <DefaultProps />
    </div>
  );
};

export default Parent;
