
import * as APIUtil from "../util/photo_api_util";


export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";



export const receivePhotos = (photos) => {
    return ({
        type: RECEIVE_PHOTOS,
        photos
    })
}

export const receivePhoto = (photo) => {
    // debugger
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

export const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_PHOTO_ERRORS,
        errors
    });
}

export const fetchPhotos = () => dispatch => {
    return (APIUtil.fetchPhotos())
        .then(photos => dispatch(receivePhotos(photos)))
};


export const fetchPhoto = (photoId) => dispatch => {
    // debugger
    return (APIUtil.fetchPhoto(photoId))
        .then(photo => dispatch(receivePhoto(photo)))
};

export const createPhoto = photo => dispatch => {
    return (APIUtil.createPhoto(photo))
        .then(photo => dispatch(receivePhoto(photo)))
        .fail(err => dispatch(receiveErrors(err.responseJSON)))
};

export const updatePhoto = photo => dispatch => {
    return (APIUtil.updatePhoto(photo))
        .then(photo => dispatch(receivePhoto(photo)))
};

export const deletePhoto = (photoId) => dispatch => {
    return (APIUtil.deletePhoto(photoId))
        .then(() => dispatch(removePhoto(photoId)))
};

