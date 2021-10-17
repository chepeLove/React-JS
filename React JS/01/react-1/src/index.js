import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/redux-store";
import StoreContext from "./StoreContext";

export let rerenderAllTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value = {store}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>,
            </StoreContext.Provider>,
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderAllTree(store.getState())

store.subscribe(() =>{
    let state = store.getState()
    rerenderAllTree(state)
} )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
