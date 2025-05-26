import axios from "axios";
import { useEffect, useState } from "react";

const FetchMethod = () => {
  const [userData, setUserData] = useState([]);

  const fetchDAta = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setUserData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDAta();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>
      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead style={{ backgroundColor: "#f2f2f2" }}>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description.slice(0, 100)}...</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchMethod;
