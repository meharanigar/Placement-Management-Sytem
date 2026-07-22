import { useEffect, useState } from "react";
import "./StudentTable.css";
import { Link } from "react-router-dom";
import api from "../../api/api";

function StudentTable() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await api.get("/students");
      setStudents(res.data.students);
    } catch (error) {
      console.log("Error fetching students:", error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await api.delete(`/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.log("Error deleting student:", error);
    }
  };

  return (
    <div className="student-table-container">
      <h2>Registered Students</h2>

      {students.length === 0 ? (
        <p>No Students Found.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>SI.No</th>
              <th>ID</th>
              <th>Profile</th>
              <th>Student Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Branch</th>
              <th>CGPA</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={student._id}>
                <td>{index + 1}</td>

                <td>{student._id}</td>

                <td>
                  <img
                    src={`http://localhost:8000/uploads/${student.image}`}
                    alt={student.studentName}
                    width="70"
                    height="70"
                    style={{
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #ddd",
                    }}
                  />
                </td>

                <td>{student.studentName}</td>

                <td>{student.email}</td>

                <td>{student.phone}</td>

                <td>{student.Branch}</td>

                <td>{student.Cgpa}</td>

                <td>
                  <Link to={`/student/edit/${student._id}`}>
                    <button>Edit</button>
                  </Link>

                  <br />
                  <br />

                  <button onClick={() => deleteStudent(student._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentTable;