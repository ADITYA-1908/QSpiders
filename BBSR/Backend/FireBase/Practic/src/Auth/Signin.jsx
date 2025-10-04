import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/Firebase";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignin = async () => {
        try {
            //! Attempts to sign 
            await signInWithEmailAndPassword(auth, email, password);
            alert("Signin successful!");
            navigate("/create-user");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow w-80">
                <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
                <input
                    type="email"
                    placeholder="Email"
                    className="border p-2 w-full mb-3 rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border p-2 w-full mb-3 rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={handleSignin}
                    className="bg-green-500 text-white w-full py-2 cursor-pointer rounded"
                >
                    Sign In
                </button>
            </div>
        </div>
    );
}
export default Signin;