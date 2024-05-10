import React, { useState, useEffect } from "react";
import "./Status.css";

function Status() {
  const [bookings, setBookings] = useState([]);
    const [isRef,setIsRef] = useState(false)

  const userId = localStorage.getItem("user_id");
  
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
  
console.log("bookings",bookings);
  useEffect(() => {
    fetch(`http://localhost:3000/bookings/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch bookings");
        }
        return response.json();
      })
      .then((data) => {
        setBookings(data.bookings);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [userId]);

    useEffect(() => {
    fetchBookings();
  }, [isRef]);

  if(bookings.length < 1){
   return <h2>NO Bookings</h2>
  }

  return (
    <section id="Status">
      <div>
        <h1>Booking Status</h1>
        {/* <ul>
          {bookings.map((booking) => (
           
           <div  style={customStyle}>
            <li key={booking.id}>
                Auditorium: {booking.auditorium}, Start Date:{" "}
                {booking.start_date.slice(0, 10)}, Start Time: {booking.start_time.slice(0, -3)}, End
                Date: {booking.end_date.slice(0, 10)}, End Time: {booking.end_time.slice(0, -3)}{" "}
                 Statu: {booking?.is_pending == 1 ? <samp style={{color:"red"}}>pending</samp>:<samp style={{color:"green"}}>approved</samp>}
              </li>
              
            </div>
          ))}
        </ul> */}
<div class="table-container">
  <table>
    <thead>
      <tr>
        <th>Auditorium</th>
        <th>Start Date</th>
        <th>Start Time</th>
        <th>End Date</th>
        <th>End Time</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {bookings.map((booking) => (
        <tr key={booking.id}>
          <td>{booking.auditorium}</td>
          <td>{booking.start_date.slice(0, 10)}</td>
          <td>{booking.start_time.slice(0, -3)}</td>
          <td>{booking.end_date.slice(0, 10)}</td>
          <td>{booking.end_time.slice(0, -3)}</td>
          <td>
            {booking.is_pending == 1 ? (
              <samp style={{ color: "red" }}>Pending</samp>
            ) : booking.is_pending == 2 ? (
              <samp style={{ color: "green" }}>approved</samp>
            ) :  <samp style={{ color: "red" }}>Rejected</samp>}
          </td>
                          <button style={{backgroundColor:"red "}} onClick={()=> {
                  cancelBooking(booking.row_id)
                  setIsRef((prev)=> !prev)
                  }}>Reject</button>
        </tr>
      ))}
    </tbody>
  </table>
</div>


      </div>
    </section>
  );
}

export default Status;

const customStyle = {
    width: "100%",
    height: "25px",
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '20px',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
  };
  
