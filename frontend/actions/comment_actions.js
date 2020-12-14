import * as APIUtil from "../util/comment_api_util";

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComments = (comments) => {
    return ({
        type: RECEIVE_COMMENTS,
        comments
    })
}

export const receiveComment = (photo) => {
    return ({
        type: RECEIVE_COMMENT,
        photo
    })
}

export const removeComment = (photo) => {
    return ({
        type: REMOVE_COMMENT,
        photo
    })
}

export const fetchComments = () => dispatch => {
    return (APIUtil.fetchComments())
        .then(comments => dispatch(receiveComments(comments)))
};

export const createComment = comment => dispatch => {
    // debugger
    return (APIUtil.createComment(comment))
        .then((photo) => dispatch(receiveComment(photo)))
};

export const updateComment = comment => dispatch => {
    return (APIUtil.updateComment(comment))
        .then((photo) => dispatch(receiveComment(photo)))
};

export const deleteComment = (commentId) => dispatch => {
    return (APIUtil.deleteComment(commentId))
        .then((photo) => dispatch(removeComment(photo)))
};