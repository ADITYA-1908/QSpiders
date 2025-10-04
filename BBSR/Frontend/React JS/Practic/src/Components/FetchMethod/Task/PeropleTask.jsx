import axios from "axios";
import { useEffect, useState } from "react";

const PeopleTask = () => {
  const [products, setProducts] = useState([]);
  const [person, setPerson] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.error("Fetch api", e);
        setLoading(false);
      });
  }, []);

  const handleInput = (e) => {
    const value = e.target.value;
    setPerson(value);
  };

  const filterUser = () => {
    return products.filter((user) =>
      user.name.toLowerCase().includes(person.toLowerCase())
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>
      <input
        type="search"
        placeholder="Search person"
        onChange={handleInput}
        value={person}
      />

      {/* Loader */}
      {loading ? (
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>Loading...</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          cellSpacing="0"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead style={{ backgroundColor: "#f2f2f2" }}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Nick Name</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {filterUser().map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PeopleTask;
