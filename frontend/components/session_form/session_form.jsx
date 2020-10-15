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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to CatStation-app!
          <br/>
          Please {this.props.formType} or {this.props.navLink}
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
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
