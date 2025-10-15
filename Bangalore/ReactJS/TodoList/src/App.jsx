import { useState } from "react";

const App = () => {
  const [itemName, setItemName] = useState("");
  const [qty, setQty] = useState("");
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

  // Handle Add / Update
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemName || !qty) {
      alert("Please enter both item name and quantity");
      return;
    }

    if (editItem) {
      // Update existing item while keeping the order
      setItems(
        items.map((item) =>
          item.id === editItem
            ? { ...item, g: itemName, quantity: qty }
            : item
        )
      );
      setEditItem(null);
    } else {
      // Add new item
      const newItem = {
        id: Date.now(),
        name: itemName,
        quantity: qty,
      };
      setItems([...items, newItem]);
    }

    setItemName("");
    setQty("");
  };

  // Delete item
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Update item (prefill form)
  const handleUpdate = (id) => {
    const current = items.find((item) => item.id === id);
    setItemName(current.name);
    setQty(current.quantity);
    setEditItem(id);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Todo List</h2>

      {/* Input Form */}
      <form
        className="flex flex-wrap justify-center gap-3"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Item"
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/4 min-w-[150px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/4 min-w-[150px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
        <button
          type="submit"
          className={`${editItem
            ? "bg-yellow-500 hover:bg-yellow-600"
            : "bg-blue-600 hover:bg-blue-700"
            } text-white font-medium px-5 py-2 rounded-lg transition`}
        >
          {editItem ? "Update" : "Add"}
        </button>
      </form>

      {/* Display Items */}
      <div className="mt-6">
        {items.length === 0 ? (
          <p className="text-center text-gray-500">No items added yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-center rounded-lg overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-2 px-3 border border-gray-300">#</th>
                  <th className="py-2 px-3 border border-gray-300">Item</th>
                  <th className="py-2 px-3 border border-gray-300">Quantity</th>
                  <th className="py-2 px-3 border border-gray-300">Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr
                    key={item.id}
                    className="odd:bg-gray-50 even:bg-white hover:bg-gray-100"
                  >
                    <td className="py-2 border border-gray-300">{index + 1}</td>
                    <td className="py-2 border border-gray-300">{item.name}</td>
                    <td className="py-2 border border-gray-300">
                      {item.quantity}
                    </td>
                    <td className="py-2 border border-gray-300 flex justify-center gap-2">
                      <button
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm transition"
                        onClick={() => handleUpdate(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm transition"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
