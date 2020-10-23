
import * as APIUtil from "../util/photo_api_util";


export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';



export const recievePhotos = (photos) => {
    return ({
        type: RECEIVE_PHOTOS,
        photos
    })
}

export const recievePhoto = (photo) => {
    return ({
        type: RECEIVE_PHOTO,
        photo
    })
}

export const removePhoto = (photoId) => {
    return ({
        type: REMOVE_PHOTO,
        photoId
    })
}

export const fetchPhotos = () => dispatch => {
    return (APIUtil.fetchPhotos())
        .then(photos => dispatch(recievePhotos(photos)))
};


export const fetchPhoto = (photoId) => dispatch => {
    return (APIUtil.fetchPhoto(photoId))
        .then(photo => dispatch(recievePhoto(photo)))
};

export const deletePhoto = (photoId) => dispatch => {
    return (APIUtil.deletePhoto(photoId))
        .then(() => dispatch(removePhoto(photoId)))
};

