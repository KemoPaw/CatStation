// signup: should make an AJAX request that creates a new user.
// login: should make an AJAX request that creates a new session.
// logout: should make an AJAX request that deletes the current session.

import { $CombinedState } from "redux"

export const signup = (user) =>{
    return $.ajax({
        url: "/api/users",
        method: 'POST',
        data: {user}
    })
}

export const login = (user) => {
    return $.ajax({
        url: "/api/session/new",
        method: 'GET',
        data: { user }
    })
}


export const logout = () => {
    return $.ajax({
        url: `/api/session/`,
        method: 'DELETE'
    })
}


