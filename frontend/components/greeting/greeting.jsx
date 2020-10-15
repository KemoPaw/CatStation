import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  
  const sessionLinks = () => (
    <nav className="login-signup">
      <img src={window.brentURL} id="catstation-logo" />
      <Link to="/signup" className="header-link">Sign Up</Link>
      <Link to="/login" className="header-link blue-button">Sign In</Link>
    </nav>
  );
  
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
