// signup: should make an AJAX request that creates a new user.
// login: should make an AJAX request that creates a new session.
// logout: should make an AJAX request that deletes the current session.

import { $CombinedState } from "redux"

export const signup = (users) =>{
    return $.ajax({
        url: "/api/users",
        method: 'POST',
        data: {users}
    })
}

export const login = (users) => {
    return $.ajax({
        url: "/api/session",
        method: 'POST',
        data: { users }
    })
}


export const logout = () => {
    return $.ajax({
        url: `/api/session/`,
        method: 'DELETE'
    })
}


