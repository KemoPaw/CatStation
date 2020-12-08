import { RECEIVE_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO, RECEIVE_PHOTO_ERRORS} from "../actions/photo_actions";


const photosReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PHOTOS:
            return Object.assign({}, state, action.photos);
        case RECEIVE_PHOTO:
            // debugger
            return Object.assign({}, state, { [action.photo.id]: action.photo }, {comments: action.photo.comments});
            // return { [action.photo.id]: action.photo }
        case REMOVE_PHOTO:
            let nextState = Object.assign({}, state)
            delete nextState[action.photoId]
            return nextState;
        case RECEIVE_PHOTO_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default photosReducer;