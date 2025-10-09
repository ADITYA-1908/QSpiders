import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Login = () => {
    const [data, setData] = useState({ user: "", password: "" });

    // Handle username input
    function handleUser(e) {
        setData({ ...data, user: e.target.value });
    }

    // Handle password input
    function handlePassword(e) {
        setData({ ...data, password: e.target.value });
    }

    // Handle form submit
    function handleSubmit(e) {
        e.preventDefault();
        console.log(data);
        alert(`Username: ${data.user}\nPassword: ${data.password}`);

        // Reset form
        setData({ user: "", password: "" });
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <form
                onSubmit={handleSubmit}
                className="border p-4 rounded shadow bg-white"
                style={{ width: "350px" }}
            >
                <h3 className="text-center mb-4">Login Form</h3>

                {/* Username Field */}
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        className="form-control"
                        value={data.user}
                        onChange={handleUser}
                        placeholder="Enter your username"
                        required
                    />
                </div>

                {/* Password Field */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        className="form-control"
                        value={data.password}
                        onChange={handlePassword}
                        placeholder="Enter your password"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button type="submit" className="btn btn-primary w-100">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
