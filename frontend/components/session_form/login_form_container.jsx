import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import loginSessionForm from './login_form';
import { closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'login'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(loginSessionForm);
