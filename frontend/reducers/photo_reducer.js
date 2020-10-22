import { RECEIVE_PHOTOS, RECEIVE_PHOTO} from "../actions/photo_actions";


const photosReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PHOTOS:
            return Object.assign({}, state, action.photos);
        case RECEIVE_PHOTOS:
            return { [action.photo.id]: action.photo }
        default:
            return state;
    }
}

export default photosReducer;