import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByNumber, reset } from "./slice/counterSlice";

function CounterComponent() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [inc, setInc] = useState()

    return (
        <div>
            <h1>{count}</h1>
            <input type="number" value={inc} onChange={(e) => setInc(Number(e.target.value))} />
            <button onClick={() => dispatch(incrementByNumber(inc))}>Increment by number</button>
            <br />
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
}

export default CounterComponent;

