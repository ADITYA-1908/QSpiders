import { useReducer, useState } from "react";

let init = {
    name: "",
    age: 0
}
function formReduce(state, action) {
    let typ = action.type;
    switch (typ) {
        case "submit":
            return {
                ...state,
                [action.field]: action.value,
            };
        case "RESET":
            return init;
        default:
            break;
    }
}
const ReduceForm = () => {

    const [data, setData] = useState([]);
    const [state, dispatch] = useReducer(formReduce, init)
    function handleSubmit(e) {
        e.preventDefault()
        setData([...data, state])
        dispatch({ type: "RESET" })
    }
    function handleChnage(e) {
        const { name, value } = e.target;
        dispatch({ type: "submit", field: name, value })
    }
    return (
        <>
            <div>

                <form action="" onSubmit={handleSubmit}>
                    <input name="name" value={state.name} onChange={handleChnage} placeholder="Enter name" type="text" />
                    <input name="age" value={state.age} onChange={handleChnage} placeholder="age" type="number" />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                {data.map((item, index) => (
                    <div key={index}>
                        <h1>{item.name}</h1>
                        <h1>{item.age}</h1>
                    </div>
                ))}

            </div>
        </>
    )
}

export default ReduceForm