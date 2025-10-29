import { useReducer } from "react";


const init = 0
function reducer(state, action) {

    switch (action) {
        case "INC":
            return state + 1;
        case "DEC":
            if (state >= 0) {
                return state - 1;

            } else {
                return state = 0
            }
        case "RESET":
            return 0;
        default:
            return state;
    }
}
const ReduceCount = () => {
    const [state, dispath] = useReducer(reducer, init)
    return (
        <div className="h-40 w-60">
            <span>Count {state}</span>
            <br />
            <div className="mt-4">
                <button className="btn btn-success" onClick={() => { dispath("INC") }}>INC</button>
                <button className="btn btn-danger" onClick={() => { dispath("DEC") }}>DEC</button>
                <button className="btn btn-warning" onClick={() => { dispath("RESET") }}>RESET</button>
            </div>
        </div>
    )
}

export default ReduceCount