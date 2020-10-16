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
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul className="signup-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let errors = (this.props.errors.length > 0) ? this.renderErrors() : <div></div>
    return (
      <div className="signup-form-container">
          <img src={window.brentURL} id="catstation-logo-su" />
          <h1 className="signup-big-text" >Sign Up</h1>
          <p className="signup-text">Join the leading showcase platform for games, film, media &amp;</p>
          <p className="signup-text"> entertainment artists</p>

        <form onSubmit={this.handleSubmit} className="signup-form-box">
                <div className="form-header-text">Sign up with your email</div>
                {errors}
                <label className="signup-label" id="signup-label-username">Username
                <div id="signup-username">
                    <input
                        className ="signup-form-input" type="text"
                        placeholder="E.g. cat-lover"
                        value={this.state.username}
                        onChange={this.update('username')}
                      />
                </div>
                </label>
                <label className="signup-label">Email
                <div id="signup-email">
                      <input className ="signup-form-input" type="text"
                        placeholder="E.g. cat@cat.com"
                        value={this.state.email}
                        onChange={this.update('email')}
                      />
              </div>
                </label>
                <label className="signup-label">Password
                <div id="signup-password">
                      <input className ="signup-form-input" type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                      />
              </div>
                </label>
                
                    <input className="login-submit" type="submit" value="Sign me up!" />
              
                 <p className="login-b-text">Already have an account? {this.props.navLink}</p>
        </form>
      </div>
    );
  }
}

export default SessionForm;
