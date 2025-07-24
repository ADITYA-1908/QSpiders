import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../Utils/Firebase";

const UpdateUser = () => {
    const [name, setName] = useState("");
    const [roll, setRoll] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const studentDoc = doc(db, "students", id);
                const snapshot = await getDoc(studentDoc);

                if (snapshot.exists()) {
                    const data = snapshot.data();
                    setName(data.name);
                    setRoll(data.roll);
                } else {
                    alert("Student not found.");
                    navigate("/show-data");
                }
            } catch (error) {
                console.error("Error fetching student:", error);
            }
        };

        fetchStudent();
    }, [id, navigate]);

    const handleUpdateStudent = async () => {
        if (!name || !roll) return alert("Please fill all fields");

        const studentDoc = doc(db, "students", id);
        await updateDoc(studentDoc, { name, roll });
        alert("Student Updated Successfully!");
        navigate("/show-data");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Update Student</h2>

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
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                    onClick={handleUpdateStudent}
                >
                    Update Student
                </button>
            </div>
        </div>
    );
};

export default UpdateUser;
