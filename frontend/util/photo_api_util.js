export const fetchPhotos = () => {

    return $.ajax({
        url: "/api/photos",
        method: 'GET'
    })
}

export const fetchPhoto = photoId => {
    return $.ajax({
        url: `/api/photos/${photoId}`,
        method: "GET"
    })
}