import { useState } from "react";

const LoginAuth = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const validateUsername = (username) => {
    return username.length >= 6;
  };

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    return hasUpperCase && hasLowerCase && hasSpecialChar && hasNumber;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Live validation
    if (name === "username") {
      setErrors({
        ...errors,
        username: validateUsername(value)
          ? ""
          : "Username must be at least 6 characters",
      });
    }

    if (name === "password") {
      setErrors({
        ...errors,
        password: validatePassword(value)
          ? ""
          : "Password must contain one uppercase, one lowercase, one number, and one special character",
        confirmPassword:
          form.confirmPassword && value !== form.confirmPassword
            ? "Password is not matched"
            : "",
      });
    }

    if (name === "confirmPassword") {
      setErrors({
        ...errors,
        confirmPassword:
          value !== form.password ? "Password is not matched" : "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isUsernameValid = validateUsername(form.username);
    const isPasswordValid = validatePassword(form.password);
    const isMatch = form.password === form.confirmPassword;

    if (isUsernameValid && isPasswordValid && isMatch) {
      alert("Login successfully");
      setForm({
        username: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({
        username: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setErrors({
        username: isUsernameValid
          ? ""
          : "Username must be at least 6 characters",
        password: isPasswordValid
          ? ""
          : "Password must contain one uppercase, one lowercase, one number, and one special character",
        confirmPassword: isMatch ? "" : "Password is not matched",
      });
    }
  };

  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          style={{
            border: `2px solid ${
              form.username.length === 0
                ? "black"
                : form.username.length >= 6
                ? "green"
                : "red"
            }`,
            marginBottom: "10px",
            width: "100%",
            padding: "8px",
          }}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

        {/* Password */}
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          style={{
            border: `2px solid ${
              form.password.length === 0
                ? "black"
                : validatePassword(form.password)
                ? "green"
                : "red"
            }`,
            marginBottom: "10px",
            width: "100%",
            padding: "8px",
          }}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        {/* Confirm Password */}
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          style={{
            border: `2px solid ${
              form.confirmPassword.length === 0
                ? "black"
                : form.confirmPassword === form.password
                ? "green"
                : "red"
            }`,
            marginBottom: "10px",
            width: "100%",
            padding: "8px",
          }}
        />
        {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword}</p>
        )}

        <button type="submit" style={{ padding: "10px", width: "100%" }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginAuth;
