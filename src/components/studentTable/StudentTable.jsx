import { useEffect, useState } from "react";
import "./StudentTable.css";
import { Link } from "react-router-dom";

function StudentTable() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents =
      JSON.parse(localStorage.getItem("students")) || [];

    setStudents(storedStudents);
  }, []);

  return (
    <div className="studentdetails">
      <h2>Student Details</h2>

      {students.length === 0 ? (
        <h3>No Students Registered Yet!</h3>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>S.No</th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Branch</th>
              <th>CGPA</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.id}</td>
                <td>{student.studentName}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.Branch}</td>
                <td>{student.Cgpa}</td>

                <td>
                  <Link to={`/Student/${student.id}`}>
                    <button>View</button>
                    <button>Delete</button>
                    </Link>
                    <Link to={`/Student/edit/${student.id}`}>Edit</Link>
                  
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