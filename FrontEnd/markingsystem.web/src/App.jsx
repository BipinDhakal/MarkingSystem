import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css'
import Login from './Authentication/Login'
import Register from './Authentication/Register'
//import Dashboard from "./AdminDashboard/Dashboard";
import Course from "./Course/Components/Course";
import { ToastContainer } from 'react-toastify';
import Rubric from './Rubric/Components/Rubric';
import RubricCriteria from './RubricCriteria/Components/RubricCriteria';

// import Header from './AdminDashboard/Header';
// import Footer from './AdminDashboard/Footer';
// import Home from './AdminDashboard/Home';
// import SideNav from './AdminDashboard/SideNav';
import Dashboard from './AdminDashboard/Dashboard';
import NavMenu from './AdminDashboard/NavMenu';


function PrivateRoute({ element }) {
  return localStorage.getItem('isAuthenticated') === 'true' ? element : <Navigate to="/" />;
}

function App(){
  return(
    <Router>

<div className="d-flex">
       
        <div className="sidebar">
          <NavMenu />
        </div>

        
        <div className="content-area">
          <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/course" element={<Course />} />
            <Route path="/rubric" element={<Rubric />} />
            <Route path="/rubriccriteria" element={<RubricCriteria />} />
          </Routes>
        </div>
      </div>




      {/* <div className="card"> */}
        {/* <Routes>        
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
 {/* Protecting the Dashboard route */}
 {/* <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course" element={<Course />} />
          <Route path="/rubric" element={<Rubric />} />
          <Route path="/rubriccriteria" element={<RubricCriteria />} />
        </Routes> */}
        <ToastContainer/>
      {/* </div> */}
    </Router>

  )
}

















// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
