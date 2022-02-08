import React from "react";
import ReactDOM from "react-dom";
import SocialNetworkJSApp from "./App";

it('renders without crashing', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<SocialNetworkJSApp/>,div)
    ReactDOM.unmountComponentAtNode(div)
})