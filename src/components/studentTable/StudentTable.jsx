import "./StudentTable.css";
function StudentTable({ students }) {
  return (
    <div className="studentdetails">
      <h2>Student Details</h2>

      <table border={2}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Branch</th>
            <th>CGPA</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.studentName}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.Branch}</td>
              <td>{student.Cgpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;