import React from "react";
import NonPrimitiveComponent from "./Components/Props/nonPremitiveProps.jsx";
import PrimitiveComponent from "./Components/Props/PremitiveProps.jsx";

const App = () => {
  const str = "Hello";
  const num = 123;
  const bool = true;
  const nil = null;
  const undef = undefined;

  const big = 1234567890123456789012345678901234567890n;

  const obj = { a: 1, b: 2 };
  const arr = [1, 2, 3];
  const func = () => "I'm a function!";

  return (
    <div>
      <h1>All Data Types Passing through props</h1>
      <PrimitiveComponent
        str={str}
        num={num}
        bool={bool}
        nil={nil}
        undef={undef}
        big={big}
      />
      <NonPrimitiveComponent obj={obj} arr={arr} func={func} />
    </div>
  );
};

export default App;
