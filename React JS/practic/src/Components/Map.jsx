import React, { Fragment } from "react";

const App = () => {
  const names = [
    "Aditya",
    "Ravi",
    "Sneha",
    "Priya",
    "Ankit",
    "Meera",
    "Vikram",
    "Isha",
    "Arjun",
    "Kavya",
    "Rahul",
    "Neha",
    "Karan",
    "Sanya",
    "Aman",
    "Pooja",
    "Rohit",
    "Divya",
    "Manav",
    "Simran",
  ];

  return (
    <div>
      <ol>
        {names.map((items, index) => {
          return (
            <Fragment key={index} style={{ display: "flex" }}>
              <ol>{index}</ol>
              <ol>{items}</ol>
            </Fragment>
          );
        })}
      </ol>
    </div>
  );
};

export default App;
