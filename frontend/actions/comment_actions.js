import * as APIUtil from "../util/comment_api_util";

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComment = (comment) => {
    return ({
        type: RECEIVE_COMMENT,
        comment
    })
}

export const removeComment = (commentId) => {
    return ({
        type: REMOVE_COMMENT,
        commentId
    })
}

export const createComment = comment => dispatch => {
    // debugger
    return (APIUtil.createComment(comment))
        .then(comment => dispatch(receiveComment(comment)))
};

export const deleteComment = (commentId) => dispatch => {
    return (APIUtil.deleteComment(commentId))
        .then(() => dispatch(removeComment(commentId)))
};