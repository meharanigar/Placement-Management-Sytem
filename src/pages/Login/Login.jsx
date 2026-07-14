import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleLoading() {
    if (studentName === "" || email === "" || password === "") {
      alert("Please fill all the fields.");
      return;
    }

    setLoading(true);
    setMessage("");

    setTimeout(() => {
      if (
        studentName === "mehar" &&
        email === "mehar@gmail.com" &&
        password === "234567890"
      ) {
        setMessage("Login Successful ✅");

          // Save login status
          localStorage.setItem("isLoggedIn", "true");

          // Save user details
            sessionStorage.setItem("studentName", studentName);
            sessionStorage.setItem("email", email);


          // Navigate to Dashboard
          navigate("/Dashboard");
      } else {
        setMessage("Invalid Username or Password ❌");
      }

      setLoading(false);
    }, 2000);
  }
  // if(isLoggedIn){
  //   localStorage.setItem("isLoggedIn","true")
  //   navigat("/Dash")
  // }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Placement Management System</h1>

        <input
          type="text"
          placeholder="Enter Your Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="button"
          className="show-password-btn"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide Password" : "Show Password"}
        </button>

        <p>
          Don't have an account?{" "}
          <Link to="/Registration">Register Here</Link>
        </p>

        <button
          className="login-btn"
          onClick={handleLoading}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default Login;