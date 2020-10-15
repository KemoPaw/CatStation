import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.state.errors;
  } 

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderUsername(){
    if (this.props.formType === 'signup') {
      return (
        <div>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>
          <br/>
        </div>
      )
    }
  }

  render() {
    let errors = (this.props.errors.length > 0) ? this.renderErrors() : <div></div>
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          <img src={window.brentURL} id="catstation-logo" />
          <h1 className="signup-big-text" >Sign Up</h1>
          <p className="signup-text">Join the leading showcase platform for games, film, media &amp; entertainment artists</p>
          {errors}
          
          <div className="login-form">
            <br/>
            {this.renderUsername()}
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value="Sign up" />
            <br/>
            <p>Already have an account? {this.props.navLink}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
