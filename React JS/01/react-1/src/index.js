import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from "react-router-dom";
import store from "./Redux/State";

export let rerenderAllTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}
                     store = {store}
                />
            </React.StrictMode>,
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderAllTree(store.getState())

store.subscribe(rerenderAllTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
