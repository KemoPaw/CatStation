import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignupSessionForm from './signup_form';

const mapStateToProps = ( state) => {
  return {
    errors: state.errors.session,
    formType: 'signup',
    navLink: <Link className="login-b-text-link" to="/login"> Sign In</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupSessionForm);
