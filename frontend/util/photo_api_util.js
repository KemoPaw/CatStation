export const fetchPhotos = () => {

    return $.ajax({
        url: "/api/photos",
        method: 'GET'
    })
    
}