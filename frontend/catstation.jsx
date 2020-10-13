import React from "react";
import ReactDOM from 'react-dom';
import {login, signup, logout} from "./util/session_api_util";

//eventlistener, waits for the event
//once that event happens, it invokes the cb function to do its job

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Hello World</h1>, root);
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    //this first argumentm is a React component, which is why we're inporting React in line 3
})