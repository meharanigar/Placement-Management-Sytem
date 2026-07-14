import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Get all students from localStorage
  const students = JSON.parse(localStorage.getItem("students")) || [];

  // Find the selected student
  const student = students.find((s) => s.id === Number(id));

  // If student is not found
  if (!student) {
    return <h2>No Student Found!</h2>;
  }

  // Form State
  const [name, setName] = useState(student.studentName || "");
  const [email, setEmail] = useState(student.email || "");
  const [phone, setPhone] = useState(student.phone || "");
  const [branch, setBranch] = useState(student.Branch || "");
  const [cgpa, setCgpa] = useState(student.Cgpa || "");

  // Update Student
  function updateStudent(e) {
    e.preventDefault();

    const updatedStudents = students.map((s) =>
      s.id === Number(id)
        ? {
            ...s,
            studentName: name,
            email: email,
            phone: phone,
            Branch: branch,
            Cgpa: cgpa,
          }
        : s
    );

    // Save updated data
    localStorage.setItem("students", JSON.stringify(updatedStudents));

    alert("Student Updated Successfully!");

    // Redirect to Student Table
    navigate("/studentTable");
  }

  return (
    <div className="edit-student">
      <h2>Edit Student</h2>

      <form onSubmit={updateStudent}>

        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="text"
          placeholder="Branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        />

        <input
          type="number"
          placeholder="CGPA"
          value={cgpa}
          onChange={(e) => setCgpa(e.target.value)}
        />

        <button type="submit">Update Student</button>

      </form>
    </div>
  );
}

export default EditStudent;