import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from "react-router-dom";
import {addPost} from "./Redux/State";

 export let rerenderAllTree = (state) =>{
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost}/>
            </React.StrictMode>,
        </BrowserRouter>,
        document.getElementById('root')
    );
}
reportWebVitals();