import { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  // Hooks with Number State
  const [students, setStudents] = useState(250);
  const [companies, setCompanies] = useState(33);
  const [placed, setPlaced] = useState(80);

  // Hook with String State
  const [name, setName] = useState("Mehar");

  // Hook with Boolean State
  const [login, setLogin] = useState(false);

  // Hook with Array State
  const [studentsList, setStudentsList] = useState([]);

  // Hook with Object State
  const [student, setStudent] = useState({
    name: "SK. Mehar Nigar",
    course: "CAI",
  });

  // String Update
  function changeName() {
    setName(name === "Mehar" ? "Nigar" : "Mehar");
  }

  // Boolean Update
  function toggleLogin() {
    setLogin(!login);
  }

  // Array Update
  function addStudent() {
    setStudentsList([
      "Shanmukh",
      "Rahul",
      "Ravi",
      "Anjali",
    ]);
  }

  // Object Update
  function updateStudent() {
    setStudent({
      ...student,
      course: "AIML",
    });
  }

  // Number Updates
  function increaseStudents() {
    setStudents(students + 1);
  }

  function decreaseStudents() {
    if (students > 0) {
      setStudents(students - 1);
    }
  }

  function increaseCompanies() {
    setCompanies(companies + 1);
  }

  function decreaseCompanies() {
    if (companies > 0) {
      setCompanies(companies - 1);
    }
  }

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

      <h1 className="na">Welcome Back, {name}</h1>

      <button onClick={changeName}>Change Name</button>
      <button onClick={toggleLogin}>
        {login ? "Logout" : "Login"}
      </button>

      <button onClick={updateStudent}>
        Update Course
      </button>

      <p><b>Course:</b> {student.course}</p>

      <button onClick={addStudent}>Show Students</button>

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