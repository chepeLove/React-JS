import React from "react";
import preloader from "../../Assets/loading img/Pulse-1s-202px.svg";

const Preloader = (props)=>{
    return   <div style={{backgroundColor:'white'}}>
        <img src={preloader} />
    </div>
}

export default Preloader
