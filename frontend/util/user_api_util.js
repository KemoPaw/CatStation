export const recieve_users = () =>{
    return $.ajax({
        url: "/api/users",
        method: 'GET'
    })
}

export const fetchUser = username => { 
    return $.ajax({
        method: "GET", 
        url: `/api/users/${username}`
    })
};