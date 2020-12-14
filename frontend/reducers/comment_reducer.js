import { RECEIVE_PHOTO } from "../actions/photo_actions";
import { RECEIVE_COMMENTS, REMOVE_COMMENT} from "../actions/comment_actions";

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments;
 
        // case RECEIVE_COMMENT:
        //     return { [action.comment.id]: action.comment}
        // case REMOVE_COMMENT:
        //     let nextState = Object.assign({}, state)
        //     delete nextState[action.commentId]
        //     return nextState;
        // case RECEIVE_PHOTO: 
        //     return action.photo.comments
        default:
            return state;
    }
};

export default commentsReducer;