import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Utils/Firebase";

const Home = () => {
    const [name, setName] = useState("");
    const [roll, setRoll] = useState("");
    const [students, setStudents] = useState([]);
    const [editId, setEditId] = useState(null);
    // name: Holds the current student's name entered in the form.
    // roll: Holds the current student's roll number entered in the form.
    // students: Array of all student records fetched from Firestore.
    // editId: Stores the ID of the student being edited; null means you're adding a new student.

    const studentCollection = collection(db, "students");
    // All student records will be stored or fetched from here.

    const fetchStudents = async () => {
        const snapshot = await getDocs(studentCollection);
        const data = snapshot.docs.map(doc => ({
            ...doc.data(),
            // for delete
            id: doc.id,
        }));
        setStudents(data);
    };
    // getDocs() fetches all documents(students) from the "students" collection.

    // .map() loops over each document, spreading its data and attaching its unique id.
    useEffect(() => {
        fetchStudents();
    }, []);

    const handleAddStudent = async () => {
        if (!name || !roll) return alert("Please fill all fields");

        await addDoc(studentCollection, { name, roll });
        fetchStudents();
        clearForm();
    };

    const handleDeleteStudent = async (id) => {
        await deleteDoc(doc(db, "students", id));
        fetchStudents();
    };

    const handleEditStudent = (student) => {
        setName(student.name);
        setRoll(student.roll);
        setEditId(student.id);
    };

    const handleUpdateStudent = async () => {
        if (!name || !roll) return alert("Please fill all fields");
        // The doc() function comes from Firebase Firestore.It is used to get
        //  a reference to a specific document inside a collection.
        // doc(firestoreInstance, collectionPath, documentId);
        const studentDoc = doc(db, "students", editId);
        await updateDoc(studentDoc, { name, roll });
        fetchStudents();
        clearForm();
    };

    const clearForm = () => {
        setName("");
        setRoll("");
        setEditId(null);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
            <h1 className="text-3xl font-bold mb-6">🎓 Student Record Manager</h1>

            <div className="bg-white p-4 rounded shadow w-full max-w-md mb-6">
                <h2 className="text-xl font-semibold mb-4">
                    {editId ? "Update Student" : "Add Student"}
                </h2>

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

                {editId ? (
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                        onClick={handleUpdateStudent}
                    >
                        Update Student
                    </button>
                ) : (
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded w-full"
                        onClick={handleAddStudent}
                    >
                        Add Student
                    </button>
                )}
            </div>


            {/* form  */}
            <div className="w-full max-w-md">
                {students.map((student) => (
                    <div
                        key={student.id}
                        className="bg-white p-4 mb-2 rounded shadow flex justify-between items-center"
                    >
                        <div>
                            <p className="font-semibold">{student.name}</p>
                            <p>🎓 Roll: {student.roll}</p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                className="bg-yellow-400 px-2 py-1 rounded text-sm"
                                onClick={() => handleEditStudent(student)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                                onClick={() => handleDeleteStudent(student.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
