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

export const fetchFilteredPhotos = (searchTerm) => {
    return (
        $.ajax({
            url: '/api/photos',
            method: 'GET',
            data: { keyword: searchTerm }
        })
    )
}


export const createPhoto = photo => {
    return $.ajax({
        url: `/api/photos`,
        method: "POST",
        data: photo,
        contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
        processData: false, // NEEDED, DON'T OMIT THIS
    })
}

export const updatePhoto = photo => {
    return $.ajax({
        url: `/api/photos/${photo.id}`, 
        method: "PATCH", 
        data: photo, 
        processData: false,
        contentType: false,
    })
}

export const deletePhoto = photoId => {
    return $.ajax({
        url: `/api/photos/${photoId}`,
        method: "DELETE"
    })
}