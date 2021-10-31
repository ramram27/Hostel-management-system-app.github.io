
import "./CSS/GirlHostel.css";
import glogo3 from "./assets/Images/glogo3.png";
import blogo from "./assets/Images/blogo.jpg";
import GirlHostelbook from "./Components/GirlHostelbook";
import BoyHostelbook from "./Components/BoyHostelbook";
import { useState } from "react";
import MainHome from "./MainHome";

const HostelBook = () => {
  const [boyhostel, setboyhostel] = useState(false);
  const [Girlhostel, setGirlhostel] = useState(false);
  return ( 
    <>
    <MainHome />
    <div className={boyhostel && "HideDiv" || Girlhostel && "HideDiv"}>
      <p className="headp">Choose Your Boys OR Girls Hostel</p>
        <div className="girlsPic" onClick={() => { setGirlhostel(!Girlhostel)}}>
        <img src={glogo3} className="img" />
        </div>

        <div className="boyPic" onClick={() => { setboyhostel(!boyhostel)}}>
        <img src={blogo} alt="" className="imgboy" />
        </div>

    </div>
    <div>
     { boyhostel ? <BoyHostelbook /> : null  }
    </div>
    <div>
     { Girlhostel? <GirlHostelbook /> : null }
    </div>
    </>
   );
}
 
export default HostelBook;