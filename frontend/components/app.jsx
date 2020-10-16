import React from 'react';
import {Provider} from 'react-redux';

import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <Modal />
        <header>
            <GreetingContainer />
        </header>
        {/* <h1>Hello! Welcome to CatStation!!</h1> */}
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </div>
);

export default App;