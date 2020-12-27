import React from 'react';
import {Provider} from 'react-redux';

import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_page_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PhotoIndex from './photo/photo_index_container';
import PhotoUploadForm from './photo/photo_upload_form';
import PhotoEditForm from './photo/photo_edit_form';

import Profile from './profile/profile_container';


import PhotoShowContainer from './photo/photo_show_container';

import Footer from './footer/footer'

import SearchIndex from './search_bar/search_index_container'


const App = () => (
    <div className="main-background">
        <Modal />
        <header>
            <GreetingContainer />
        </header>
        <Switch>
            <Route exact path="/photos/:photoId" component={PhotoShowContainer} />
            <Route exact path="/photos" component={PhotoIndex} />
            <Route exact path="/upload" component={PhotoUploadForm} />
            <Route exact path="/photos/:photoId/edit" component={PhotoEditForm} />
            <Route exact path="/profile/:username" component={Profile} />

            <Route exact path="/search/:keyword" component={SearchIndex} />

            




            <Route exact path="/signin" component={LogInFormContainer} />
            <Route exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/" component={PhotoIndex} />
            <Redirect to="/" />
        </Switch>
        <footer id="catstation-footer">
            <Footer />
        </footer>

    </div>
);

export default App;