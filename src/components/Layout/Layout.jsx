import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Sidebar from "../Sidebar/Sidebar";

function Layout(){
    return(
        <>
        <NavBar/>
        <div className="main">
             <Sidebar/>
             <div className="content">
                <Outlet/>

             </div>
        </div>

        <Footer/>

        </>
    )
}
export default Layout;