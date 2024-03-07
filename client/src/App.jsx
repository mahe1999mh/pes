import "./App.css";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignupForm from "./pages/userSignup";
import Login from "./pages/Login";
import BookingForm from "./pages/BookingForm";
import Main from "./pages/userPage/Main";
import AdminLogin from "./pages/admin/adminLogin";
import AdminHome from "./pages/admin/AdminHome";
// import UserHome from "./pages/userPage/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
          {/* admin login */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/getdata" element={<AdminHome />} />
        <Route path="/user" element={<Login />} />
        <Route path="/usersignup" element={<SignupForm />} />
        {/*user after login  */}
        <Route path="/app/booking" element={<BookingForm />} />
        <Route path="/app/home" element={<Main />} />
        <Route path="*" element={<Navigate to="/usersignup" />} />
      </Routes>
    </div>
  );
}

export default App;
