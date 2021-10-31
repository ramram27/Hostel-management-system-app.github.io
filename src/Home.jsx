import  a from "./assets/Images/a.jpg";
import  b from "./assets/Images/b.jpg";
import  d from "./assets/Images/d.jpg";
import  mess from "./assets/Images/mess.jpg";
import "./CSS/Home.css";
import MainHome from "./MainHome";

const Home = () => {
  return ( 
    <>
     <MainHome />
    <div>
      <span className="div1">
      <img src={a} alt="Smiley face" className="a"/>
      </span>
      
      <span className="div2">
      <img src={b} alt="Smiley face" className="b"/><br/><br/><br/><br/><br/><br/><br/>
      <span className="Aroom">Hostel Room</span>
      </span><br/>
     
      <span className="div3">
      <img src={d} alt="Smiley face" className="d"/>
      </span>
     
      <span className="div3">
      <img src={mess} alt="Smiley face" className="mess"/>
      </span> 
      
      <footer className="footer">
        <h1>Hostel Staff Contact information :</h1>
        <div className="ContactInfo">
        <h2>Name : Rohit Kumar</h2>
        <h2>Email id : rohit83033@gmail.com</h2>
        <h2>Mobile No. : 9795893226</h2>
        </div>
      </footer>
    </div>
    </>
   );
}
 
export default Home;