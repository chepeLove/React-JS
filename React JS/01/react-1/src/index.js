import React from 'react';
import './index.css';
import state, {subscribe} from "./Redux/State";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from "react-router-dom";
import {addPost, updateNewPostText} from "./Redux/State";
import {observe} from "web-vitals/dist/modules/lib/observe";

export let rerenderAllTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}/>
            </React.StrictMode>,
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderAllTree(state)

subscribe(rerenderAllTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
