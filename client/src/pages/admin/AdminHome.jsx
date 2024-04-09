import React, { useEffect, useState } from 'react';

const AdminHome = () => {
  const [bookings, setBookings] = useState([]);
  const [isRef,setIsRef] = useState(false)

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


  console.log(bookings,"bookings");
  
  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:3000/getAllBookings');
      const data = await response.json();
      const bookingData = data.bookings?.filter((item) => item.is_pending === 1);

      setBookings(bookingData);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const cancelBooking = async (bookingId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/cancelBooking/${bookingId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to cancel booking");
      }
      const data = await response.json();
      console.log(data.message); // Booking canceled successfully
    } catch (error) {
      console.error("Error canceling booking:", error.message);
    }
  };

  const confirmBooking = async (bookingId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/confirmBooking/${bookingId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to confirmBooking booking");
      }
      const data = await response.json();
      console.log(data.message); // Booking canceled successfully
    } catch (error) {
      console.error("Error confirmBooking booking:", error.message);
    }
  };
  useEffect(() => {
    fetchBookings();
  }, [isRef]);

  if(bookings.length < 1){
    return <h1>No Booking</h1>
  }

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
              <td>
                <button style={{backgroundColor:"green"}} onClick={()=> {
                  confirmBooking(booking.row_id)
                  setIsRef((prev)=> !prev)
                  }}>Accept</button>
                <button style={{backgroundColor:"red "}} onClick={()=> {
                  cancelBooking(booking.row_id)
                  setIsRef((prev)=> !prev)
                  }}>Reject</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AdminHome;
