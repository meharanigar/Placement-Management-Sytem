// const Student = function(props){
// //   //use de-structuring
//   return(
//     <>
//     <h2>welcome {props.name}</h2>
//     <h2>roll{props.roll}</h2>
//     <h2>section{props.section}</h2>
//     <h2>age{props.age}</h2>
//     <h2>cgp{props.cgp}</h2>
//     </>
//   )

import { Link } from "react-router-dom";
import StudentTable from "../../components/StudentTable/StudentTable";

// };
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
    <StudentTable/>
    </>

  )
}






export default Student;