import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Utils/Firebase";

const ShowUsers = () => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    const fetchStudents = async () => {
        const studentCollection = collection(db, "students");
        const snapshot = await getDocs(studentCollection);
        const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        setStudents(data);
    };

    const handleDeleteStudent = async (id) => {
        await deleteDoc(doc(db, "students", id));
        fetchStudents();
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-6">🎓 Student Records</h1>
            <button
                className="bg-green-500 text-white px-4 py-2 rounded mb-4"
                onClick={() => navigate("/update-user")}
            >
                Add New Student
            </button>

            <div className="overflow-x-auto w-full max-w-3xl">
                <table className="min-w-full bg-white rounded shadow">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-4 border">Name</th>
                            <th className="py-2 px-4 border">Roll Number</th>
                            <th className="py-2 px-4 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id} className="text-center">
                                <td className="py-2 px-4 border">{student.name}</td>
                                <td className="py-2 px-4 border">{student.roll}</td>
                                <td className="py-2 px-4 border flex justify-center gap-2">
                                    <button
                                        className="bg-yellow-400 px-2 py-1 rounded text-sm"
                                        onClick={() => navigate(`/update-user/${student.id}`)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                                        onClick={() => handleDeleteStudent(student.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {students.length === 0 && (
                            <tr>
                                <td colSpan="3" className="py-4">
                                    No student records found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowUsers;
