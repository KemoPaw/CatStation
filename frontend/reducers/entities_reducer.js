import {combineReducers } from 'redux';

import photos from "./photo_reducer"

import users from './users_reducer';

export default combineReducers({
    users,
    photos
})