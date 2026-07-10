import { useState } from "react";
import "./Registration.css";
import StudentTable from "../../components/studentTable/StudentTable";

function Registration() {
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [Branch, setBranch] = useState("");
  const [Cgpa, setCgpa] = useState("");
  const [password, setPassword] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  // const [Student,setStudent]=useState([]);
  const [students, setStudents] = useState([]);
  //Array to store all registartion in array

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  function handleSubmit(e) {
    e.preventDefault();

    // Name Validation
    if (studentName.trim() === "") {
      alert("Student Name is required");
      return;
    }

    // Email Validation
    if (email.trim() === "") {
      alert("Email is required");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Phone Validation
    if (phone.trim() === "") {
      alert("Phone Number is required");
      return;
    }

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
      alert("Phone Number must contain exactly 10 digits");
      return;
    }

    // Branch Validation
    if (Branch.trim() === "") {
      alert("Branch is required");
      return;
    }

    // Password Validation
    if (password.trim() === "") {
      alert("Password is required");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert(
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    // Create student object
    const student = {
      studentName,
      email,
      phone,
      Branch,
      Cgpa ,
      password,
    };
    // Store in array
    setStudents([...students, student]);

    console.log("Registration Successful");
    console.log([...students, student]);

    alert("Registration Successful!");

    setShowDetails(true);
     // Clear form
    setStudentName("");
    setEmail("");
    setPhone("");
    setBranch("");
    setCgpa("");
    setPassword("");
  }
  return (
    <div className="registration">
      <div className="form-box">
        <h1>Student Registration</h1>

        <form>
          <input
            type="text"
            placeholder="Enter Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Branch"
            value={Branch}
            onChange={(e) => setBranch(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter CGPA"
            value={Cgpa}
            onChange={(e) => setCgpa(e.target.value)}
          />

          <button
            type="button"
            onClick={handleSubmit}
          >
            Register Student
          </button>
        </form>
        <StudentTable students={students}/>
              

        {/* <div className="studentdetails">
            <h2>Student Details</h2>
            <table border={2}>
              <th>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Branch</th>
                    <th>CGPA</th>
                  </tr>
              </th>
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
         */}
      </div>
    </div>
    )
  
}
export default Registration;