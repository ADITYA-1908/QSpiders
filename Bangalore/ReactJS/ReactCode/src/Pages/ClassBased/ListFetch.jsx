import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";

const initialProducts = [
    {
        id: 101,
        price: 1000,
        name: "Samsung",
        desc: "High-quality smartphone.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA57j0yUuZGUXVFU6I1L_cE98ZqKXTPmdcLg&s",
        qty: 1,
    },
    {
        id: 102,
        price: 2000,
        name: "Apple",
        desc: "Premium device with excellent performance.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA57j0yUuZGUXVFU6I1L_cE98ZqKXTPmdcLg&s",
        qty: 1,
    },
    {
        id: 103,
        price: 3000,
        name: "OnePlus",
        desc: "Fast and smooth smartphone.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA57j0yUuZGUXVFU6I1L_cE98ZqKXTPmdcLg&s",
        qty: 1,
    },
    {
        id: 104,
        price: 4000,
        name: "Realme",
        desc: "Value for money smartphone.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA57j0yUuZGUXVFU6I1L_cE98ZqKXTPmdcLg&s",
        qty: 1,
    },
];

class ListFetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: initialProducts,
        };
        this.handleInc = this.handleInc.bind(this)
        this.handleDec = this.handleDec.bind(this)
    }

    handleInc = (id) => {
        const updated = this.state.products.map((p) =>
            p.id === id ? { ...p, qty: p.qty + 1 } : p
        );
        this.setState({ products: updated });
    };

    handleDec = (id) => {
        const updated = this.state.products.map((p) =>
            p.id === id && p.qty > 1 ? { ...p, qty: p.qty - 1 } : p
        );
        this.setState({ products: updated });
    };



    render() {
        return (
            <div className="container mt-4">
                <h2 className="text-center mb-4 text-success">Product List</h2>

                <div className="table-responsive">
                    <table className="table table-stripe align-middle">
                        <thead className="table-success">
                            <tr>
                                <th>Id</th>
                                <th>Product</th>
                                <th>Image</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.products.map(({ id, name, img, price, qty }) => (
                                <tr className="text-center" key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>
                                        <img
                                            src={img}
                                            alt={name}
                                            className="img-thumbnail"
                                            style={{ width: "80px" }}
                                        />
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center align-items-center gap-2">
                                            <button
                                                className="btn btn-outline-danger btn-sm"
                                                onClick={() => this.handleDec(id)}
                                            >
                                                -
                                            </button>
                                            <span className="fw-bold">{qty}</span>
                                            <button
                                                className="btn btn-outline-success btn-sm"
                                                onClick={() => this.handleInc(id)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td>{price}</td>
                                    <td>{price * qty}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </div>
        );
    }
}

export default ListFetch;
