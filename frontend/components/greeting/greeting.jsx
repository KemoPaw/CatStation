import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/signup" class="header-link">Sign Up</Link>
      <Link to="/login" class="header-link blue-button">Sign In</Link>
      {/* &nbsp;or&nbsp; */}
      
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
