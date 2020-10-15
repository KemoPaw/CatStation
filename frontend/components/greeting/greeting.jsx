import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ( props ) => {
  
  const sessionLinks = () => (
    <nav className="login-signup">
      <div>
          <Link to="/"><img src={window.brentURL} id="catstation-logo" /></Link>
      </div>

      <div>
          <Link to="/signup" className="header-link">Sign Up</Link>
          <Link to="/login" className="header-link blue-button">Sign In</Link>
      </div>
    </nav>
  );
  
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {props.currentUser.username}!</h2>
      <button className="header-button" onClick={props.logout}>Log Out</button>
    </hgroup>
  );

  return props.currentUser ? personalGreeting() : (props.location.pathname === "/signup" ? null : sessionLinks() )
  
  //render null if the this.props.location.pathname ==== "signup"
};


export default Greeting;


