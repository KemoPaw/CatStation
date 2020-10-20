import React from 'react';
import {Provider} from 'react-redux';

import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_page_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PhotoIndex from './photo/photo_index_container';


const App = () => (
    <div className="main-background">
        <Modal />
        <header>
            <GreetingContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/" component={PhotoIndex} />
            <Redirect to="/" />
        </Switch>

    </div>
);

export default App;