import { useDispatch, useSelector } from "react-redux";

const CountComponent = () => {
    const data = useSelector((state) => state.init);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{data}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
        </div>
    );
};

export default CountComponent;
