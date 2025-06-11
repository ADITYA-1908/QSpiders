import { useEffect, useState } from "react";
import Loading from "../../../components/Loading/Loading.jsx";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    // Fetch data
    fetch("http://localhost:3000/user")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        // Delay for 2 seconds before hiding loader
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">
        All Registered Users
      </h2>

      {users.length === 0 ? (
        <p className="text-center text-gray-500">No users found.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-lg rounded-xl p-5 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
            >
              <img
                src={user.image || "https://via.placeholder.com/100"}
                alt={user.username}
                className="w-24 h-24 rounded-full object-cover mb-4 border"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {user.username}
              </h3>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-600">Phone: {user.phone}</p>
              <p className="text-sm text-gray-600">Gender: {user.gender}</p>
              <p className="text-sm text-gray-600">DOB: {user.dob}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllUser;
