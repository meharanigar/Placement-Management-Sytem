import { useEffect,useState } from "react";
// import { useState } from "react";
import "./Dashboard.css";
import Logout from "../Logout/Logout";
import Clock from "../Clock/Clock";

function Dashboard() {
  // Number States
  const [students, setStudents] = useState(250);
  const [companies, setCompanies] = useState(33);
  const [placed, setPlaced] = useState(80);

  // String State
  const [name, setName] = useState("Mehar");

  // Array State
  const [studentsList, setStudentsList] = useState([]);

  // Object State
  const [student, setStudent] = useState({
    name: "SK. Mehar Nigar",
    course: "CAI",
  });

  // Change Name
  function changeName() {
    setName(name === "Mehar" ? "Nigar" : "Mehar");
  };
  useEffect(()=>{
  alert("welcome admin")
  });

  // Show Students
  function addStudent() {
    setStudentsList([
      "Shanmukh",
      "Rahul",
      "Ravi",
      "Anjali",
    ]);
  }

  // Update Course
  function updateStudent() {
    setStudent({
      ...student,
      course: "AIML",
    });
  }

  // Students
  function increaseStudents() {
    setStudents(students + 1);
  }

  function decreaseStudents() {
    if (students > 0) {
      setStudents(students - 1);
    }
  }

  // Companies
  function increaseCompanies() {
    setCompanies(companies + 1);
  }

  function decreaseCompanies() {
    if (companies > 0) {
      setCompanies(companies - 1);
    }
  }

  // Placed Students
  function increasePlaced() {
    if (placed < students) {
      setPlaced(placed + 1);
    }
  }

  function decreasePlaced() {
    if (placed > 0) {
      setPlaced(placed - 1);
    }
  }

  return (
    <div className="center">

      <div className="dashboard-header">
        <h1 className="na">Welcome Back, {name} 🎉</h1>
        <Clock/>

        <Logout />
      </div>

      <button onClick={changeName}>Change Name</button>

      <button onClick={updateStudent}>
        Update Course
      </button>

      <p>
        <b>Course:</b> {student.course}
      </p>

      <button onClick={addStudent}>
        Show Students
      </button>

      <ul>
        {studentsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="cards">

        <div className="card">
          <h2>{students}</h2>
          <p>Total Students</p>

          <button onClick={increaseStudents}>+</button>
          <button onClick={decreaseStudents}>-</button>
        </div>

        <div className="card">
          <h2>{companies}</h2>
          <p>Total Companies</p>

          <button onClick={increaseCompanies}>+</button>
          <button onClick={decreaseCompanies}>-</button>
        </div>

        <div className="card">
          <h2>{placed}</h2>
          <p>Placed Students</p>

          <button onClick={increasePlaced}>+</button>
          <button onClick={decreasePlaced}>-</button>
        </div>

        <div className="card">
          <h2>{students - placed}</h2>
          <p>Pending Placements</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;