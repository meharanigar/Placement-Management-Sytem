import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/api";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [Branch, setBranch] = useState("");
  const [Cgpa, setCgpa] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch student details
  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const res = await api.get(`/students/${id}`);

      const student = res.data.student;

      setStudentName(student.studentName);
      setEmail(student.email);
      setPhone(student.phone);
      setBranch(student.Branch);
      setCgpa(student.Cgpa);
    } catch (error) {
      console.log("Error fetching student:", error);
    }
  };

  // Update student
  const updateStudent = async (e) => {
    e.preventDefault();

    const updatedStudent = {
      studentName,
      email,
      phone,
      Branch,
      Cgpa,
    };

    try {
      setLoading(true);
      const res = await api.put(`/students/${id}`, updatedStudent);

      alert(res.data.message);
      navigate("/studentTable");
    } catch (error) {
      console.log("Error updating student:", error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Server is not responding.");
      }
    } finally{
      setLoading(false);
    }
  };

  return (
    <div className="edit-student">
      <h2>Edit Student</h2>

      <form onSubmit={updateStudent}>
        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Branch"
          value={Branch}
          onChange={(e) => setBranch(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="CGPA"
          value={Cgpa}
          onChange={(e) => setCgpa(e.target.value)}
          min="0"
          max="10"
          step="0.1"
          required
        />

        <button disabled={loading} type="submit">
          {loading ? "Updating student...":"Update Student"}</button>
      </form>
    </div>
  );
}

export default EditStudent;