import "./Layout.css";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Sidebar from "../Sidebar/Sidebar";

function Layout() {
  return (
    <>
      <NavBar />

      <main className="layout">
        <Sidebar />

        <section className="content">
          <Outlet />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Layout;