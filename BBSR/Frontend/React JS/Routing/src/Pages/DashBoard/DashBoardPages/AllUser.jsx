import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../../components/Loading/Loading.jsx";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = () => {
    setLoading(true);
    fetch("http://localhost:3000/user")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // delete function
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/user/${id}`);
      toast.success("User deleted successfully", { position: "top-right" });

      // Re-fetch users after deletion
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error(error.message, { position: "top-right" });
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="p-6 min-h-screen">
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
              className="bg-white shadow-lg rounded-xl p-5 flex flex-col items-center hover:shadow-xl transition duration-300"
            >
              <img
                src={user.image}
                alt={user.username}
                className="w-24 h-24 rounded-full object-cover mb-4 border"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {user.username}
              </h3>
              <div className="text-left w-full mt-2 ml-14">
                <p className="text-sm text-gray-600">Phone: {user.phone}</p>
                <p className="text-sm text-gray-600">Gender: {user.gender}</p>
                <p className="text-sm text-gray-600">DOB: {user.dob}</p>
              </div>
              <div className="mt-4 flex justify-evenly gap-5 items-center">
                <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300">
                  <Link to={`/edituser/${user.id}`}>Edit</Link>
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllUser;
