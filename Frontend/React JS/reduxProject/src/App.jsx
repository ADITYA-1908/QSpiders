import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { count, value, dropDown } = useSelector((state) => state);
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
      <select
        name="city"
        id=""
        onChange={(e) =>
          dispatch({ type: "dropDown", payload: e.target.value })
        }
      >
        <option value="select">select</option>
        <option value="BBSR">BBSR</option>
        <option value="BAM">BAM</option>
        <option value="MKG">MKG</option>
      </select>

      <p>You select: {dropDown}</p>
    </>
  );
}

export default App;
