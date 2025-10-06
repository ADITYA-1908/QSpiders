
import { useState } from 'react';
import Button from "../../Components/Button";
const Table = () => {
    let [items, setItems] = useState({
        id: 101,
        title: "Bat",
        qty: 1,
        price: 1000
    });
    let { id, title, qty, price } = items

    function handleInc() {
        setItems((product) => {
            return {
                ...product,
                qty: product.qty + 1
            }
        })
    }
    function handleDec() {
        setItems((product) => {
            return {
                ...product,
                qty: (product.qty > 1) ? 1 : product.qt - 1
            }
        })
    }
    return (
        <>
            <section>
                <table className='p-5 w-140 text-center border-1 mt-10'>
                    <thead className='border-2'>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Qty</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody className='border-2'>
                        <tr>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>
                                <Button fn={handleDec}>-</Button>
                                {qty}
                                <Button fn={handleInc}>+</Button>
                            </td>
                            <td>{price * qty}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default Table