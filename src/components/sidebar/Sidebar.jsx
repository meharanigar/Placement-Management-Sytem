import { Link } from 'react-router-dom';
import "./Sidebar.css";
import Logout from "../Logout/Logout";
import StudentTable from '../studenttable/studentTable';
// import { NavLink } from 'react-router-dom';
function Sidebar(){
    return(
        <div className="side">
        <ul>
            {/* <NavLink to={"/Dashboard"}
            className={({isActive})=
             isActive?
              "active":""}
            >
            <li>Dashboard</li>
            </NavLink> */}
            <Link to={"/Dashboard"}>
            <li>Dashboar</li>
            </Link>

            <Link to={"/Student"}>
            <li>Student</li>
            </Link>

            <li>companies</li>
            <li>placement</li>

            <Link to={"/Registration"}>
            <li>Registration</li>
            </Link>

            <li>Settings</li>
            <Link to={"/Login"}>
            <li>Login</li>
            </Link>
            <Logout/>
            <Link to={"/StudentTable"}>
            <li>studenttable</li></Link>
           
        </ul>
        </div>
    )
};
export default Sidebar;