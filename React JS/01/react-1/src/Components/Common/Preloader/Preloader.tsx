import React from "react";
import preloader from "../../Assets/loading img/Pulse-1s-202px.svg";

type PropsType = {

}

const Preloader:React.FC<PropsType> = (props)=>{
    return   <div>
        <img src={preloader} />
    </div>
}

export default Preloader
