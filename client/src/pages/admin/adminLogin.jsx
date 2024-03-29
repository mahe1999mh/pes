import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../Login.css"
const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/adminlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // Handle successful login
        console.log('Login successful:', data);
        localStorage.setItem("user_id",data?.user_id)
        navigate("/admin/getdata");
        // Use Navigate to redirect to "/app/booking"
       
      } else {
        // Handle login error
        console.error('Login failed:', response.statusText);
        alert("Login failed",response.statusText)
      }
    } catch (error) {
      console.error('Error:', error);

    }
  };

  return (
    <div  className="login-container">
      <h2>admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <h6><Link to="usersignup">user register</Link></h6>
    </div>
  );
};

export default AdminLogin;
