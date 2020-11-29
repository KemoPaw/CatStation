import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/session_actions';
import SignupSessionForm from './signup_form';

const mapStateToProps = ( state) => {
  return {
    errors: state.errors.session,
    formType: 'signup',
    navLink: <Link className="login-b-text-link" to="/signin"> Sign In</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupSessionForm);
