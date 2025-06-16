import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <br />
      <br />
      <input
        type="text"
        placeholder="Enter the text"
        onChange={(e) =>
          dispatch({ type: "inputvalue", payload: e.target.value })
        }
      />
      <p>You typed: {value}</p>
    </>
  );
}

export default App;
