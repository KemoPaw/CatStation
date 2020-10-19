
import * as APIUtil from "../util/photo_api_util";


export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

export const recievePhotos = (photos) => {
    return ({
        type: RECEIVE_PHOTOS,
        photos
    })
}

export const fetchPhotos = () => dispatch => {
    return (APIUtil.fetchPhotos())
        .then(photos => dispatch(recievePhotos(photos)))
}
