import "./App.css";
import {  Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignupForm from "./pages/userSignup";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />    
        <Route path="/admin" element={<Home/>} />    
        <Route path="/user" element={<Login/>} />    
        <Route path="/usersignup" element={<SignupForm/>} />    
        <Route path="*" element={<Navigate to="/usersignup" />} /> 
        </Routes>
    </>
  );
}

export default App;
