import { useState } from "react";

const Forms = () => {
  const [data, setData] = useState({
    username: "",
  });
  const [error, setError] = useState("");
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleForm = (e) => {
    setData({ username: "" });
    e.preventDefault();
    if (data.username) {
      alert("ok");
      setError("");
      setData({
        username: "",
      });
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleInput}
        />
        {error && <p>name is enter</p>}
        <button type="submit">Submit</button>
      </form>
      <h1>{data.username}</h1>
    </div>
  );
};

export default Forms;
