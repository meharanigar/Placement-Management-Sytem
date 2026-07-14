// // const Student = function(props){
// // //   //use de-structuring
// //   return(
// //     <>
// //     <h2>welcome {props.name}</h2>
// //     <h2>roll{props.roll}</h2>
// //     <h2>section{props.section}</h2>
// //     <h2>age{props.age}</h2>
// //     <h2>cgp{props.cgp}</h2>
// //     </>
// //   )

import { Link } from "react-router-dom";
import StudentTable from "../../components/StudentTable/StudentTable";

function Student(){
  return(
    <>
    <h1>Student Management</h1>
    <p>manage all registration students here</p>
    <Link to="/Registration">
    <button>
     Add New Students
    </button>
    </Link>
    <StudentTable Student={Student}/>
    </>

  )
};
export default Student;


// // import StudentTable from "./Studenttable/StudentTable";
// // import { useState } from "react";

// const Student = function(props){
//     function Deletestudent(id){
//         conststudents = StudentDetails.filter(
//         (student) => studentid=!id

//     )};
//     setstudents(updatedstudents);
//     localStorage.getItem("students",
//         JSON.stringify(updatedstudents)
//     )
//     return(
//     <>
//     <h1>Student details</h1>
//     <h1>{props.name}</h1>
//     <h1>{props.roll_no}</h1>
//     <h1>{props.branch}</h1>
//     </>

//     )
// };
// export default Student;






