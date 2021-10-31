import { Link, useHistory } from "react-router-dom";
import "./App.css";


const MainHome = () => {
  const history = useHistory();
  function logout() {
    localStorage.clear();
    history.push('/login');
  }
  return (
    <>

      <div className="header">
        <span className="head"> Hostel Management System</span>

        {
          localStorage.getItem('loginpass') ?
            <>
              <span className="Link2" ><Link to="/home" style={{ textDecoration: 'none' }}>Home</Link></span>
              <span className="Link1"> <Link to="/bookhostel" style={{ textDecoration: 'none' }}>Book Hostel</Link></span>
              <span className="Link1"><Link to="/viewall" style={{ textDecoration: 'none' }}>All Student</Link></span>
              <span className="Link1"><Link to="/login" style={{ textDecoration: 'none' }} onClick={logout}>Logout</Link></span>


            </>
            :
            <>
              <span className="Link2" ><Link to="/" style={{ textDecoration: 'none' }}>Registration</Link></span>
              <span className="Link1" ><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></span>
            </>
        }

      </div>

    </>
  );
}

export default MainHome;