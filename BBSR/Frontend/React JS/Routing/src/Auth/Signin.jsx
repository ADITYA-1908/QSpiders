import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../components/Loading/Loading.jsx";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const token = "vwhfdgvhfhcsghvh24gh3g4hjvfdfvh784t24t";
    if (user && email === user.email && password === user.password) {
      setLoading(true);
      localStorage.setItem("jwttoken", token);
      toast.success("Signed in successfully!", {
        position: "top-right",
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else {
      setMsg("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {loading && <Loading />}
      <ToastContainer />
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Sign In
        </h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {msg && <p className="text-red-500 text-sm">{msg}</p>}

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition-colors text-white py-2 rounded-md font-semibold"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <span
            className="text-blue-600 hover:text-blue-800 underline cursor-pointer font-medium"
            onClick={() => navigate("/signup")}
          >
            Create account
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signin;
