import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Signup = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        newPassword: "",
        accept: false,
    });

    const { username, email, password, newPassword, accept } = data;

    function handleUpdateInput(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    function handleUpdateBox(e) {
        setData({ ...data, [e.target.name]: e.target.checked });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(data);

        setData({
            username: "",
            email: "",
            password: "",
            job: "",
            text: "",
            accept: false,
        });
    }

    return (
        <div className="container mt-5 d-flex d-flex justify-content-center align-items-center">
            <form className="p-4 border w-50 h-200" onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Sign Up</h2>
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className="custom-input p-2 border rounded w-100"
                            name="username"
                            value={username}
                            onChange={handleUpdateInput}
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div className="col">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="custom-input p-2 border rounded w-100"
                            name="email"
                            value={email}
                            onChange={handleUpdateInput}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                </div>

                {/* Password*/}
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="custom-input p-2 border rounded w-100"
                            name="password"
                            value={password}
                            onChange={handleUpdateInput}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="col">
                        <label className="form-label">Conform Password</label>
                        <input
                            type="newPassword"
                            className="custom-input p-2 border rounded w-100"
                            name="newPassword"
                            value={newPassword}
                            onChange={handleUpdateInput}
                            placeholder="Enter your password again"
                            required
                        />
                    </div>
                </div>
                {/* Checkbox */}
                <div className="form-check mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="accept"
                        checked={accept}
                        onChange={handleUpdateBox}
                    />
                    <label className="form-check-label">
                        Accept terms & conditions
                    </label>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button className="btn btn-primary w-100" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
