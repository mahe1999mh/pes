
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "10px",
          width: "500px",
          height: "100px",
        }}
      >
        <Link to="/user">
          <div className="box">
            User Login
          </div>
        </Link>
        <Link to="/admin">
          <div className="box" >
            Admin Login
          </div>
        </Link>
      </div>
    </>
  );
}

export default Home;
