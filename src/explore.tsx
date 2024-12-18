import React from "react";

import { Link } from "react-router-dom";
function Explore(){
    return(
       <Link to="./Clubs"> <p  className="explore"> <button className="button-86"> Explore</button></p></Link>
    );
}
export default Explore