import { RECEIVE_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO, RECEIVE_PHOTO_ERRORS} from "../actions/photo_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_COMMENTS} from "../actions/comment_actions";


const photosReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;

    switch (action.type) {

        case RECEIVE_PHOTOS:
            return Object.assign({}, state, action.photos);
        case RECEIVE_PHOTO:
            // debugger
            return Object.assign({}, state, { [action.photo.id]: action.photo });
            // return { [action.photo.id]: action.photo }
        case REMOVE_PHOTO:
            nextState = Object.assign({}, state)
            delete nextState[action.photoId]
            return nextState;
        case RECEIVE_PHOTO_ERRORS:
            return action.errors;
        case REMOVE_COMMENT:
            return Object.assign({}, state, { [action.photo.id]: action.photo });
        case RECEIVE_COMMENT:
            return Object.assign({}, state, { [action.photo.id]: action.photo });
     
        default:
            return state;
    }
};

export default photosReducer;