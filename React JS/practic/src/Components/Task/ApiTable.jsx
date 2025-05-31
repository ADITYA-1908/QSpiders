import axios from "axios";
import { orderBy } from "lodash";
import { useEffect, useState } from "react";

const ApiTable = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setSortedProducts(res.data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  const categories = ["all", ...new Set(products.map((item) => item.category))];

  // Filtering
  const filtered = sortedProducts.filter((item) => {
    const matchTitle = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchTitle && matchCategory;
  });

  const sortAsc = () => {
    const sorted = orderBy(products, ["price"], ["asc"]);
    setSortedProducts(sorted);
  };

  const sortDesc = () => {
    const sorted = orderBy(products, ["price"], ["desc"]);
    setSortedProducts(sorted);
  };
  return (
    <>
      <div className="flex flex-wrap gap-2 items-center justify-center p-4">
        <input
          type="text"
          placeholder="Search by title..."
          className="border px-3 py-2 rounded-md w-64"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border px-3 py-2 rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <button
          onClick={sortAsc}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Sort Low to High
        </button>

        <button
          onClick={sortDesc}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Sort High to Low
        </button>
      </div>

      <div className="p-4">
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3 border">ID</th>
              <th className="p-3 border">TITLE</th>
              <th className="p-3 border">PRICE</th>
              <th className="p-3 border">CATEGORY</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="p-2 border">{item.id}</td>
                  <td className="p-2 border">{item.title}</td>
                  <td className="p-2 border">${item.price}</td>
                  <td className="p-2 border">{item.category}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-4">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ApiTable;
