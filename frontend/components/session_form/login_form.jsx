import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
    this.clickLink = this.clickLink.bind(this);
    this.navLink = this.navLink.bind(this);
  }

  componentDidMount() {
    this.state.errors;
    this.props.closeModal;
    this.props.clearErrors();
  } 

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then //passed throught the props
    (() => this.props.closeModal());
  }

  renderErrors() {
    return(
      <div className="login-modal-errors">
      <ul >
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
      </div>
    );
  }

  demoUser() {
    let demouser = {
      email: "demo@demo.com",
      password: "password"
    };

    this.props.processForm(demouser); //dispatches info to backend?
    this.props.closeModal();

  }

  clickLink() {
    this.props.closeModal();
  }

  navLink() {
    return (<Link className="login-b-text-link" to="/signup" onClick={() => this.props.closeModal()}>Sign Up</Link>);
    // this.props.closeModal();
  }


  render() {
    let errors = (this.props.errors.length > 0) ? this.renderErrors() : <div className="login-modal-no-errors"></div>
    return (
      <div className="login-form-container">
        <p className="signup-big-text">Sign In</p>
        <form onSubmit={this.handleSubmit} className="login-page-box">
          {errors}
          <br />

          

          <div className="login-page">
            
           <label className="login-label"> Your Email 
            <div className="login-div">
              <input type="email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-form-input"
                placeholder="email@example.com"
              />
              </div>
            </label>
           
            <label className="login-label">  Password 
            <div className="login-div">
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-form-input"
                placeholder="password"
              />
              </div>
            </label>
          
            <input className="login-submit" type="submit" value="Sign In" />
            <button className="login-submit" type="button" onClick={this.demoUser}>Demo User</button>
            
            <p className="login-b-text">Please Sign In or {this.navLink()} </p>

          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
