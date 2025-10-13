import { useState } from 'react';


export default function ToDoList() {
    let [items, setItems] = useState([]);


    function handleAddItem(item) {
        setItems((items) => {
            return [...items, item];
        });
    }

    function handleDeleteItem(id) {
        setItems((items) => {
            return items.filter((item) => item.id != id);
        })
    }

    return (
        <>

            <Form onAddItem={handleAddItem} />
            <ItemsList itemsList={items} onDeleteItem={handleDeleteItem} />
            <Stats itemsList={items} />
        </>
    )
}

function Navbar() {
    return (
        <>
            <nav className='navbar navbar-dark bg-dark'>
                <div className="container-fluid">
                    <a href="#" className='navbar-brand'>🧾 Jspiders Institute</a>
                </div>
            </nav>
        </>
    )
}

function Form({ onAddItem }) {
    let [itemName, setItemName] = useState("");
    let [qty, setQty] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        if (!itemName || !qty) return;
        let newItem = { id: Math.round(Math.random() * 50), itemName, qty, carried: false };
        onAddItem(newItem);
        setItemName("");
        setQty("");
    }

    return (
        <>
            <section className='container-fluid mt-3'>
                <div className="row">
                    <div className="col-6 m-auto">
                        <div className="card">
                            <div className="card-header bg-dark text-center text-white">
                                <h2>Pack The Items Needed To Attend Class?</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className='mb-2'>
                                        <input type="text" className='form-control' placeholder='Item Name' value={itemName} onChange={(e) => setItemName(e.target.value)} />
                                    </div>
                                    <div className='mb-3'>
                                        <input type="text" className='form-control' placeholder='Quantity' value={qty} onChange={(e) => setQty(e.target.value)} />
                                    </div>
                                    <div>
                                        <input type="submit" className='btn btn-dark' value="Add Item" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


function ItemsList({ itemsList, onDeleteItem }) {
    return (
        <>
            <section className='container-fluid mt-3'>
                {
                    itemsList.length >= 1 && (<div className="row">
                        <div className="col-6 m-auto">
                            <div className="card">
                                <div className="card-body">
                                    <ol className='list-group'>
                                        {itemsList.map(item => <Item item={item} key={item.id} onDeleteItem={onDeleteItem} />)}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </section>
        </>
    )
}

function Item({ item, onDeleteItem }) {
    return (
        <>
            <li className='list-group-item list-group-item-secondary mb-2'>
                <span className='fw-bold' style={item.carried ? { textDecoration: "line-through" } : {}}>{item.qty} {item.itemName}</span>
                <button className='btn float-end' onClick={() => onDeleteItem(item.id)}>❌</button>
            </li>
        </>
    )
}

function Stats({ itemsList }) {
    let totalItems = itemsList.length;
    return (
        <>
            <section className='container-fluid mt-3'>
                {
                    <div className="row">
                        <div className="col-6 m-auto">
                            <div className="card">
                                <div className="card-body bg-dark text-white text-center">
                                    {
                                        <h2>{(itemsList.length == 0) ? "Your List Is Empty" : `You Packed ${totalItems} Items`}</h2>

                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </section>
        </>
    )
}