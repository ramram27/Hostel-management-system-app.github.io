import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Protected = (props) => {
  const history = useHistory();
let Comp = props.Comp;
useEffect(() => {
  if(!localStorage.getItem('loginpass')) {
    history.push('./login');
  }
},[])
  return ( 
    <>
     <Comp />
    </>
   );
}
 
export default Protected;