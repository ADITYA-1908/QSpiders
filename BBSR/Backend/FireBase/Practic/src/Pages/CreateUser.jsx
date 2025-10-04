import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Utils/Firebase";

const CreateUser = () => {
    const [name, setName] = useState("");
    const [roll, setRoll] = useState("");
    const navigate = useNavigate();

    const handleAddStudent = async () => {
        if (!name || !roll) return alert("Please fill all fields");

        const studentCollection = collection(db, "students");
        await addDoc(studentCollection, { name, roll });
        alert("Student Added Successfully!");
        navigate("/user-data");

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Add New Student</h2>

                <input
                    type="text"
                    placeholder="Name"
                    className="border p-2 w-full mb-2 rounded"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Roll Number"
                    className="border p-2 w-full mb-4 rounded"
                    value={roll}
                    onChange={(e) => setRoll(e.target.value)}
                />
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded w-full"
                    onClick={handleAddStudent}
                >
                    Add Student
                </button>
            </div>
        </div>
    );
};

export default CreateUser;
