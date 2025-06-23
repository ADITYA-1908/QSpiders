import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);

  console.log(count);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export { Counter };
export default App;
