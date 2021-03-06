import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search_bar/search_bar_container'


//props now has access to openModel()

const Greeting = ( props ) => {
  
  const sessionLinks = () => (
    <nav className="login-signup">
      <div>
          <Link to="/"><img src={window.brentURL} id="catstation-logo" /></Link>
      </div>


      {/* start on search bar now! */}
      {/* <div>
        <input type="text"></input>
      </div> */}
      <SearchBar />

      <div>
          <Link to="/signup" className="header-link">Sign Up</Link>
          <button onClick={() => props.openModal("login")} className="header-link blue-button">Sign In</button>
         
          {/* <Link to="/login" className="header-link blue-button">Sign In</Link> */}
      </div>
    </nav>
    
  );
  
  const personalGreeting = () => (
      <nav className="logged-in-nav">
          <div>
              <Link to="/"><img src={window.brentURL} id="catstation-logo" /></Link>
          </div>

        <SearchBar />
        

          <div>
                <Link to="/upload" className="header-link">Upload Photo</Link>

                <h2 className="header-name">Hello, {props.currentUser.username}!</h2>
                <button className="header-link" onClick={props.logout}>Log Out</button>
          </div>
      </nav>
  );

  return props.currentUser ? personalGreeting() : (props.location.pathname === "/signup" ? null : sessionLinks() )
  
  //render null if the this.props.location.pathname ==== "signup"
};


export default Greeting;


