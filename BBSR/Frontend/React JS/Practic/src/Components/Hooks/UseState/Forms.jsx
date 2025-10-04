import { useState } from "react";

const Forms = () => {
  const [data, setData] = useState({
    username: "",
    gender: "",
    termsAccepted: false,
    Branch: "",
    hobbies: [],
  });
  const hoobies = [
    "Cooking",
    "Cricket",
    "Eating",
    "Singing",
    "Reading",
    "Coding",
  ];
  const [error, setError] = useState("");

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "hobbies") {
      const updatedHobbies = checked
        ? [...data.hobbies, value]
        : data.hobbies.filter((hobby) => hobby !== value);
      setData({ ...data, hobbies: updatedHobbies });
    } else {
      const newValue = type === "checkbox" ? checked : value;
      setData({ ...data, [name]: newValue });
    }
  };

  const handleForm = (e) => {
    e.preventDefault();

    const { username, gender, termsAccepted, Branch } = data;
    const isFormValid = username && gender && termsAccepted && Branch;

    if (isFormValid) {
      alert("Form submitted successfully");
      setError("");
      setData({
        username: "",
        gender: "",
        termsAccepted: false,
        Branch: "",
        hobbies: [],
      });
    } else {
      setError("Please fill all required fields correctly.");
    }
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        {/* Username */}
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleInput}
          placeholder="Enter your name"
        />

        {/* Gender */}
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={data.gender === "male"}
              onChange={handleInput}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={data.gender === "female"}
              onChange={handleInput}
            />
            Female
          </label>
        </div>

        {/* Branch Dropdown */}
        <select name="Branch" value={data.Branch} onChange={handleInput}>
          <option value="">Select Branch</option>
          <option value="B.Tech">B.Tech</option>
          <option value="BSC">BSC</option>
          <option value="MBA">MBA</option>
        </select>

        {/* Multiple Checkbox (Hobbies) */}
        <div>
          <p>Select your hobbies:</p>
          {hoobies.map((hobby) => (
            <label key={hobby}>
              <input
                type="checkbox"
                name="hobbies"
                value={hobby}
                checked={data.hobbies.includes(hobby)}
                onChange={handleInput}
              />
              {hobby}
            </label>
          ))}
        </div>

        {/* Terms and Conditions */}
        <div>
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={data.termsAccepted}
              onChange={handleInput}
            />
            I accept the terms and conditions
          </label>
        </div>

        {/* Error message */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Submit</button>
      </form>

      {/* Display form data */}
      <h3>Form Data Preview:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Forms;
