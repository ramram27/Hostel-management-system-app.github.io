import { useState } from "react";
import { useHistory } from "react-router-dom";
import validator from 'validator';
import "./CSS/register.css";
import res from "./assets/Images/res.jpg"
import MainHome from "./MainHome";

const Registration = () => {
  const history = useHistory();
  const [emailError, setEmailError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [setcpass, setcpassError] = useState('');
  const [ user, setUser] = useState({
    email:"",
    password:"",
    cpassword:""
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
    const { email, password , cpassword} = user;
    
    if(!email && !password) {
     setEmailError('⚠ Enter valid Email!');
     setErrorMessage('⚠ Is Not Strong Password ');
    }  
    else if (!validator.isEmail(email)) {
      setEmailError('⚠ Enter valid Email!')
    }
   else if (!validator.isStrongPassword(password, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('⚠ Enter Strong Password ');
    } 
    else if(password != cpassword) {
      setcpassError("Your confirm password is worng");
    }
    else {
      alert("succesfull registr");
      history.push("/login");
    }
    const res = await fetch('/signup',{
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({email, password})
    });
    
}

  return (
    <>
      <MainHome />
     <img src={res} className="signupimg" />
    <div className="signup">
  
        <form  method="POST">
        <label>Enter Email id</label>
          <input type="text" name="email" value={user.email} 
          placeholder="Your Email" onChange={ handleChange } 
         
          />
           <p>{emailError}</p>
           <label>Enter Password (Minlength 8 and enter spceial character @,#,$,%,&,*)</label>
            <input type="password" name="password" value={user.password} 
            placeholder="Your Password" onChange={ handleChange } 
           />
           <p>{errorMessage}</p>
            <label>Enter Confirm Password</label>
            <input type="password" name="cpassword" value={user.cpassword} 
            placeholder="Your Confirm Password" onChange={ handleChange } 
           />
            <p>{setcpass}</p>
            <button className="buttonRes" onClick={handleSubmitbtn} >Register</button>
   
          </form>
        {/* <button className="buttonlog"  onClick={()=> history.push("/login")}>Login</button> */}
    </div>
    </>
  );
}
 
export default Registration;