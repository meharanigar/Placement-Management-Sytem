import { useState } from "react";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";

function Registration() {
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [Branch, setBranch] = useState("");
  const [Cgpa, setCgpa] = useState("");
  const [password, setPassword] = useState("");

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const student = {
      studentName,
      email,
      phone,
      Branch,
      Cgpa,
      // password,
    };

    try {
      const res = await api.post("/students", student);

      alert(res.data.message);

      // Clear Form
      setStudentName("");
      setEmail("");
      setPhone("");
      setBranch("");
      setCgpa("");
      setPassword("");

      // Navigate to Student Table
      navigate("/studentTable");
    } catch (error) {
      console.log("Error:", error);

      if (error.response) {
        console.log(error.response.data);
        alert(error.response.data.message);
      } else {
        alert("Server is not responding.");
      }
    }
  };

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
            required
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Enter Branch"
            value={Branch}
            onChange={(e) => setBranch(e.target.value)}
            required
          />

          {/* Uncomment if password is needed */}
          {/* 
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          */}

          <input
            type="number"
            placeholder="Enter CGPA"
            value={Cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            step="0.1"
            min="0"
            max="10"
            required
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