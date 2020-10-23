import { RECEIVE_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO} from "../actions/photo_actions";


const photosReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PHOTOS:
            return Object.assign({}, state, action.photos);
        case RECEIVE_PHOTO:
            return { [action.photo.id]: action.photo }
        case REMOVE_PHOTO:
            let nextState = Object.assign({}, state)
            delete nextState[action.photoId]
            return nextState;
        default:
            return state;
    }
};

export default photosReducer;