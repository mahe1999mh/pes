import React, { useState } from 'react';
import "./BookingForm.css"

const BookingForm = () => {
  const [formData, setFormData] = useState({
    auditorium: '',
    start_date: '',
    start_time: '',
    end_date: '',
    end_time: '',
    user_id: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
      // Clear form data
      setFormData({
        auditorium: '',
        start_date: '',
        start_time: '',
        end_date: '',
        end_time: '',
        user_id: ''
      });
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message || 'Error submitting booking');
    }
  };
  
  return (
    <div>
      <h2>Book Auditorium</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Auditorium:</label>
          <input type="number" name="auditorium" value={formData.auditorium} onChange={handleChange} />
        </div>
        <div>
          <label>Start Date:</label>
          <input type="date" name="start_date" value={formData.start_date} onChange={handleChange} />
        </div>
        <div>
          <label>Start Time:</label>
          <input type="time" name="start_time" value={formData.start_time} onChange={handleChange} />
        </div>
        <div>
          <label>End Date:</label>
          <input type="date" name="end_date" value={formData.end_date} onChange={handleChange} />
        </div>
        <div>
          <label>End Time:</label>
          <input type="time" name="end_time" value={formData.end_time} onChange={handleChange} />
        </div>
        <div>
          <label>User ID:</label>
          <input type="text" name="user_id" value={formData.user_id} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
