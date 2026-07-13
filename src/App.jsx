
import NavBar from './components/NavBar/NavBar';
import Sidebar from  './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
// import Heading from './components/Heading';
// import Student from './components/Student';
import Dashboard from './components/Dashboard/Dashboard';
import { useState } from 'react';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
// import studentTable from './components/studenttable/studentTable';
import { Routes,Route } from 'react-router-dom';
import StudentTable from './components/StudentTable/StudentTable';
import Layout from './components/Layout/Layout';
import Home from "./pages/Home/Home";
import Logout from './components/Logout/Logout';
import Student from './pages/Student/Student';
import StudentDetails from './pages/StudentDetails/StudentDetails';
import Clock from './components/Clock/Clock';
//APP.jsx:The Root component
//initially everything is dispalyed from app.jsx
//jsx:browser cant understan the jsx
//Bable -->will help to conver jsx code into js
// function App(){
//   return(
//     <>

//     <h1>Welcome to my new project</h1>
//     <p>Learn Today and Lead Tomorrow</p>

//     </>
//   );
// }
// //my second component
// function App(){
//   return(
//      <div>
      
    {/* //   <NavBar/>
    //   <Heading ></Heading>
    //    name="mehar"
    //    year = {2027}
      
    //   />
    //   <Student name="nigar" */}
    {/* //   roll = {12}
    //   section = "A"
    //   age = {20}
    //   cgp = {9.30}
    //   /> */}
       {/* <Heading 
    //    name="mehar"
    //    year = {2027}
      
    //   /> 
    // */}

    
// function App(){
//     return(
//      <div>
//     <NavBar/>
//       <Sidebar/>
//       <Footer/>
//       {/* <Dashboard/> */}
    
   
//   </div>
//   )
// }
function App(){
  const [count, setCount] = useState(250)

  function addStudent(){
    setCount(count+1)
    console.log(count)
  }
  return(
    <>
    <h1>{count}</h1>
    <button onClick={addStudent}>Add student</button>
  
    {/* <NavBar/>
    <Sidebar/>
    <Dashboard/>
     <Registration/> */}
     {/* <studentTable/> */}
     {/* <Login/>
     <Footer/> */}

     <Routes>
      <Route path="/Student/:id" element={<StudentDetails/>}/>

      <Route path="/Login" element={<Login/>}/>
      <Route path="/Registration" element={<Registration/>}/>
      <Route element={<Layout/>}>
      <Route  path="/"
      element={<Home/>}/>

      <Route path="/Dashboard"
      element={<Dashboard/>}/>
      </Route>
      
      <Route path="/NavBar" element={<NavBar/>}/>
      <Route path="/studentTable" element={<StudentTable/>}/>
      <Route path="/Footer" element={<Footer/>}/>
      <Route path="/Sidebar" element={<Sidebar/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Logout" element={<Logout/>}/>
      <Route path="/Student/:id" element={<Student/>}/>
      
     </Routes>
     

    </>
  )
}
export default App;
