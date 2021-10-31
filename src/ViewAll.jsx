import BoysShowData from "./Components/BoysShowData";
import GirlsShowData from "./Components/GirlsShowData";
import { useState } from "react";
import gview from "./assets/Images/gview.jpg";
import bview from "./assets/Images/bview.jpg";
import MainHome from "./MainHome";

import "./CSS/GirlHostel.css";

const ViewAll = () => {
  const [boyhostel, setboyhostel] = useState(false);
  const [Girlhostel, setGirlhostel] = useState(false);
  return ( 
    <>
    <MainHome />
     <div className={boyhostel && "HideDiv" || Girlhostel && "HideDiv"}>
      <p className="headp">View All Boys OR Girls Information</p>
        <div className="girlsPic" onClick={() => { setGirlhostel(!Girlhostel)}}>
        <img src={gview} className="img" />
        </div>

        <div className="boyPic" onClick={() => { setboyhostel(!boyhostel)}}>
        <img src={bview} alt="" className="imgboy" />
        </div>

    </div>
    <div>
      {Girlhostel ? <GirlsShowData /> : null}
    </div>
    <div>
      {boyhostel ? <BoysShowData /> : null}
    </div>
    </>
  
   );
}
 
export default ViewAll;