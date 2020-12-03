import {combineReducers } from 'redux';

import photos from "./photo_reducer";
import comments from "./comment_reducer";


import users from './users_reducer';

export default combineReducers({
    users,
    photos,
    comments
})