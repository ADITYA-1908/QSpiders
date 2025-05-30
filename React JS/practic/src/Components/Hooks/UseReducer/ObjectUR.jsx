import { useReducer } from "react";

const UseReducer = () => {
  const initialState = {
    count: 0,
    error: "",
  };

  const Reducer = (state, action) => {
    switch (action) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "clear":
        return { ...state, count: 0 };
      default:
        return { ...state, error: "Unknown action!" };
    }
  };

  const [val, dispatch] = useReducer(Reducer, initialState);
  if (val.error) {
    return <p>{val.error}</p>;
  }
  return (
    <>
      <div>
        <h1>useReducer Hook</h1>
        <p>Value: {val.count}</p>
        <div>
          <button onClick={() => dispatch("increment")}>Increment</button>
          <button onClick={() => dispatch("decrement")}>Decrement</button>
          <button onClick={() => dispatch("clear")}>Clear</button>
          <button onClick={() => dispatch("default")}>default</button>
        </div>
      </div>
    </>
  );
};

export default UseReducer;
