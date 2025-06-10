import { useEffect, useState } from "react";

const DropDown = () => {
  const [users, setUsers] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const finalData = await res.json();
      setUsers(finalData);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle selection from dropdown
  const handleSelectChange = (e) => {
    setSelectedPerson(e.target.value);
  };

  // Determine which data to show: filtered or full
  const displayedUsers = selectedPerson
    ? users.filter((user) => user.name === selectedPerson)
    : users;

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <h1>User Details Viewer</h1>

      <select onChange={handleSelectChange} value={selectedPerson}>
        <option value="">Show All</option>
        {users.map((user) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </select>

      <table border="1">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Name</th>
            <th>Email</th>
            <th>NickName</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {displayedUsers.length > 0 ? (
            displayedUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.address.city}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DropDown;
