import React from 'react';
import { Link } from 'react-router-dom';

//props now has access to openModel()

const Greeting = ( props ) => {
  
  const sessionLinks = () => (
    <nav className="login-signup">
      <div>
          <Link to="/"><img src={window.brentURL} id="catstation-logo" /></Link>
      </div>

      <div>
          <Link to="/signup" className="header-link">Sign Up</Link>
          <button onClick={() => props.openModal("login")}>Sign In</button>
          {/* <Link to="/login" className="header-link blue-button">Sign In</Link> */}
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


