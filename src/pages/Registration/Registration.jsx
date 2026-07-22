import { useState } from "react";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";

function Registration() {
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [Cgpa, setCgpa] = useState("");
  const [Branch, setBranch] = useState("");

  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("studentName", studentName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("Cgpa", Cgpa);
    formData.append("Branch", Branch);

    formData.append("image", image);

    try {
      const res = await api.post("/students", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert(res.data.message);

      setStudentName("");
      setEmail("");
      setPhone("");
      setCgpa("");
      setBranch("");
      
      setImage(null);

      navigate("/studentTable");
    } catch (error) {
      console.error(error);

      if (error.response) {
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
            type="number"
            placeholder="Enter CGPA"
            value={Cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            step="0.1"
            min="0"
            max="10"
            required
          />

          <input
            type="text"
            placeholder="Enter Branch"
            value={Branch}
            onChange={(e) => setBranch(e.target.value)}
            required
          />


          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />

          <button type="submit">
            Register Student
          </button>
        </form>

        <p style={{ marginTop: "15px" }}>
          Already Have An Account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Registration;