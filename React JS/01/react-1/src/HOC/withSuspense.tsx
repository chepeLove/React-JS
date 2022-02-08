import React from 'react'
import {Component} from "react";
import Preloader from "../Components/Common/Preloader/Preloader";


export function withSuspense <WCP>(WrappedComponent:React.ComponentType<WCP>){
    return (props:WCP)=>{
     return  <React.Suspense fallback={<Preloader/>}>
         <WrappedComponent {...props} />
     </React.Suspense>
    }
}