import { useState } from "react";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [Branch, setBranch] = useState("");
  const [Cgpa, setCgpa] = useState("");
  const [password, setPassword] = useState("");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

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

    // CGPA Validation
    if (Cgpa.trim() === "") {
      alert("CGPA is required");
      return;
    }

    // Password Validation
    if (password.trim() === "") {
      alert("Password is required");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert(
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character."
      );
      return;
    }

    // Create Student Object
    const student = {
      id:Date.now(),
      studentName,
      email,
      phone,
      Branch,
      Cgpa,
      password,
    };

    // Get Existing Students
    const existingStudents =
      JSON.parse(localStorage.getItem("students")) || [];

    // Add New Student
    existingStudents.push(student);

    // Save to Local Storage
    localStorage.setItem(
      "students",
      JSON.stringify(existingStudents)
    );

    alert("Registration Successful!");

    // Clear Form
    setStudentName("");
    setEmail("");
    setPhone("");
    setBranch("");
    setCgpa("");
    setPassword("");

    // Navigate to Student Table
    navigate("/StudentTable");
  }

  return (
    <div className="registration">
      <div className="form-box">
        <h1>Student Registration</h1>

        <form onSubmit={handleSubmit}>
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

          <button type="submit">
            Register Student
          </button>
        </form>

        <p style={{ marginTop: "15px" }}>
          Already Have An Account?{" "}
          <Link to="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Registration;