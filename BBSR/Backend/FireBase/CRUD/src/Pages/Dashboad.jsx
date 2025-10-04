import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/Firebase";
import { signOut } from "firebase/auth";

export default function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth);
        alert("Logged out successfully");
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 flex flex-col">
            <div className="flex justify-end space-x-4 mb-6">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => navigate("/signup")}
                >
                    Sign Up
                </button>
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={() => navigate("/signin")}
                >
                    Sign In
                </button>
            </div>

            <h1 className="text-3xl font-bold mb-4 text-center">Welcome to the Dashboard</h1>
            <p className="max-w-xl mx-auto text-center text-gray-700">
                This is a simple dashboard page demonstrating React routing and Firebase Authentication.
                Click the SignUp or SignIn buttons to navigate. After successful login or signup,
                you'll be redirected back here to the Dashboard.
            </p>

            <div className="flex justify-center mt-8">
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
