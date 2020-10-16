import React from "react";
import ReactDOM from 'react-dom';
import {signup, login, logout} from "./actions/session_actions";
import configureStore from './store/store'

import Root from './components/root';

//eventlistener, waits for the event
//once that event happens, it invokes the cb function to do its job

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, root);
    // window.login = login;
    // window.signup = signup;
    // window.logout = logout;
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    //this first argumentm is a React component, which is why we're inporting React in line 3
})