import { useState } from "react";
import "./Login.css";
import Dashboard from "../../components/Dashboard/Dashboard";

function Login() {
  const [logged, setLogin] = useState(false);
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
        setLogin(true);
      } else {
        setMessage("Invalid Username or Password ❌");
      }

      setLoading(false);
    }, 2000);
  }

  function handleLogout() {
    setLogin(false);
    setStudentName("");
    setEmail("");
    setPassword("");
    setShowPassword(false);
    setMessage("");
  }

  return (
    <>
      {!logged ? (
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
      ) : (
        <>
          <h2 className="welcome">
            Welcome Back, {studentName}! 🎉
          </h2>

          <Dashboard />

          <div className="logout-container">
            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Login;