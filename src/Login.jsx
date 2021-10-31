import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CSS/Login.css";
import log from "./assets/Images/log2.png";
import MainHome from "./MainHome";

const Login = ({ setLoginUser}) => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: ""

  });



  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmitbtn = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    const res = await fetch('/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = res.json();

    if (res.status === 400) {
      alert("Invalid Credential");
      console.log("error");
    }
    else {
      alert("Successfull Login");
      localStorage.setItem('loginpass', email);
      history.push("/home");
      
    }
     
   
  }
  return (
    <>
     <MainHome />
      <img src={log} className="loginimg" />
      <div className="Login">

        <form method="POST">
          <label>Email id</label>
          <input type="text" name="email" value={user.email}
            placeholder="Your Email" onChange={handleChange}

          />

          <label>Password</label>
          <input type="password" name="password" value={user.password}
            placeholder="Your Password" onChange={handleChange}
          />

          <button className="buttonlogin" onClick={handleSubmitbtn}  >Login</button>
        </form>
        {/* <button className="buttonResi" onClick={()=> history.push("/")} >Register</button> */}
      </div>
      
    
    </>
  );
}

export default Login;