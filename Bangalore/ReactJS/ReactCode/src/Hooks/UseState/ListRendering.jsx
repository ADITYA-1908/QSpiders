import { useState } from "react";

const products = [
    {
        PID: 1,
        title: "Fjallraven",
        price: 100,
        qty: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    },
    {
        PID: 2,
        title: "Mens Casual",
        price: 200,
        qty: 1,
        image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    },
    {
        PID: 3,
        title: "Mens Cotton Jacket",
        price: 300,
        qty: 1,
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    },
];

const employees = [
    { id: 1, name: "Tom" },
    { id: 2, name: "Cat" },
    { id: 3, name: "Jerry" },
];

const ListRendering = () => {
    const [items, setItems] = useState(products);

    function handleInc(PID) {
        const updated = items.map((item) =>
            item.PID === PID ? { ...item, qty: item.qty + 1 } : item
        )
        setItems(updated)
    }


    function handleDec(PID) {
        const updated = items.map((e) =>
            e.PID === PID ? { ...e, qty: e.qty > 1 ? e.qty - 1 : 1 } : e
        );
        setItems(updated);
    }

    return (
        <>
            <h1 className="mt-3">1. List Rendering</h1>
            <section className="fluid-container text-center mt-2">
                <div className="row">
                    <div className="col-5">
                        <div className="card">
                            <div className="card-body">
                                {employees.map((e) => (
                                    <h1 key={e.id}>{e.name}</h1>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <h2 className="mt-2">2. Array of Object Rendering</h2>
            <section className="container-fluid text-center mt-2">
                <div className="row">
                    <div className="col-14">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Img</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((e) => {
                                    const { PID, title, price, qty, image } = e;
                                    return (
                                        <tr key={PID}>
                                            <td>{PID}</td>
                                            <td>{title}</td>
                                            <td>
                                                <img
                                                    src={image}
                                                    alt={title}
                                                    width="50"
                                                    height="50"
                                                    style={{
                                                        objectFit: "cover",
                                                        borderRadius: "5px",
                                                    }}
                                                />
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-sm btn-danger ms-1"
                                                    onClick={() => handleDec(PID)}
                                                >
                                                    -
                                                </button>
                                                {qty}
                                                <button
                                                    className="btn btn-sm btn-primary me-1"
                                                    onClick={() => handleInc(PID)}
                                                >
                                                    +
                                                </button>

                                            </td>
                                            <td>₹{(qty * price).toFixed(2)}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ListRendering;
