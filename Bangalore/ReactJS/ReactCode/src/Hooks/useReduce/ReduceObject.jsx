import { useReducer } from "react";
const init = {
    id: 1,
    name: "Iphone",
    Price: 1000,
    qty: 1,

}
function cartReduce(state, action) {
    switch (action.type) {
        case "INC":
            return { ...state, qty: state.qty + 1 }

        case "DEC":
            return { ...state, qty: state.qty - 1 }
        default:
            return state
    }
}
const ReduceObject = () => {
    const [state, dispatch] = useReducer(cartReduce, init)
    return (
        <div>
            <div>
                <span>{state.id}</span>
                <p>
                    {state.name}
                </p>
                <h3>
                    {state.Price}
                </h3>
                <button onClick={() => dispatch({ type: "INC" })}>+</button>
                <span>{state.qty}</span>
                <button onClick={() => dispatch({ type: "DEC" })}>-</button>
                <h3>{state.Price * state.qty}</h3>

            </div>
        </div>
    )
}

export default ReduceObject