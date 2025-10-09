import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Signup = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        job: "",
        text: "",
        accept: false,
    });

    const { username, email, password, job, text, accept } = data;

    // For text, email, password, textarea, select
    function handleUpdateInput(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    // For checkbox
    function handleUpdateBox(e) {
        setData({ ...data, [e.target.name]: e.target.checked });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(data);

        // Reset form
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
        <div className="container mt-5">
            <form
                className="p-4 border w-50 mx-auto "
                onSubmit={handleSubmit}
            >
                <h2 className="text-center mb-4">Sign Up</h2>

                {/* Username */}
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={username}
                        onChange={handleUpdateInput}
                        placeholder="Enter your username"
                        required
                    />
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={handleUpdateInput}
                        placeholder="Enter your email"
                        required
                    />
                </div>

                {/* Password */}
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={handleUpdateInput}
                        placeholder="Enter your password"
                        required
                    />
                </div>

                {/* Job */}
                <div className="mb-3">
                    <label className="form-label">Job</label>
                    <select
                        className="form-select"
                        name="job"
                        value={job}
                        onChange={handleUpdateInput}
                    >
                        <option value="">Select</option>
                        <option value="Developer">Developer</option>
                        <option value="Tester">Tester</option>
                    </select>
                </div>

                {/* Description */}
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        rows="3"
                        name="text"
                        value={text}
                        onChange={handleUpdateInput}
                        placeholder="Write something about yourself"
                    />
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
