import { useReducer } from "react";

const Reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "clear":
      return 0;
    default:
      return state;
  }
};

const UseReducer = () => {
  const initialState = 0;
  const [val, dispatch] = useReducer(Reducer, initialState);

  return (
    <>
      <div>
        <h1>useReducer Hook</h1>
        <p>Value: {val}</p>
        <div>
          <button onClick={() => dispatch("increment")}>Increment</button>
          <button onClick={() => dispatch("decrement")}>Decrement</button>
          <button onClick={() => dispatch("clear")}>Clear</button>
        </div>
      </div>
    </>
  );
};

export default UseReducer;
