// login(user)(thunk action creator)
// logout()(thunk action creator)
// signup(user)(thunk action creator)
// receiveCurrentUser(currentUser)(regular action creator)
// logoutCurrentUser()(regular action creator)
// receiveErrors(errors)(regular action creator)



// Don't forget to define and export the corresponding action types as well 
// (e.g., export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER').

import * as APIUtil from "./util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECIEVE_SESSION_ERRORS = "RECIEVE_SESSION_ERRORS";

export const CurrentUser = (currentUser) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        currentUser
    });
}

export const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER
    });
}

export const receiveErrors = (errors) => {
    return ({
        type: RECIEVE_SESSION_ERRORS,
        errors
    });
}
