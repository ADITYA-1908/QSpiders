import { useState } from "react";
import Button from "../../Components/Button";

const UsestateHooks = () => {
    const [count, setCount] = useState(0);
    function Increment() {
        setCount((prv) => prv + 1)
    }
    function Decrement() {
        setCount((prv) => prv - 1)
    }
    return (
        <>

            {/* <div>
                <h1>UseState increment with prv value</h1>
                <h2 className="font-bold">{count}</h2>
                <button className="bg-red-300 p-6 h-8 w-10" onClick={Increment}>+</button>
                <button className="bg-green-400 pl-6 gap-3 w-10 h-8" onClick={Decrement}>-</button>

            </div> */}
            <div>
                <h1>UseState increment with Props function</h1>
                <h2 className="font-bold">{count}</h2>
                <Button fn={Increment}>INC</Button>
                <Button fn={Decrement}>DEC</Button>

            </div>
        </>
    )
}

export default UsestateHooks