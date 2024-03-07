import React, { useEffect, useState } from 'react';

const AdminHome = () => {
  const [bookings, setBookings] = useState([]);

  const auditoriums = {
    "1": "Golden Jubilee",
    "2": "MRD",
    "3": "Panini",
    "4": "Ramanujan",
    "5": "Ashvamedha",
    "6": "Be Block",
    "7": "Jhansi Rani",
    "8": "Trivarna",
    "9": "Inspiration",
  }

  useEffect(() => {
    fetchBookings();
  }, []);

  console.log(bookings,"bookings");
  
  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:3000/getAllBookings');
      const data = await response.json();
      setBookings(data.bookings);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  return (
    <>

      <h1>Booking List</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Auditorium</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Start Date</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Start Time</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>End Date</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>End Time</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id} style={{ border: '1px solid #dddddd' }}>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{auditoriums[booking.auditorium]}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{booking.start_date?.split("T")[0]}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{booking.start_time?.substr(0, 5)}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{booking.end_date?.split("T")[0]}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{booking.end_time?.substr(0, 5)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AdminHome;
