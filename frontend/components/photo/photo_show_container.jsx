import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPhoto, deletePhoto } from '../../actions/photo_actions';
import { createComment, deleteComment, updateComment } from '../../actions/comment_actions';
import { fetchUsers} from '../../actions/user_actions';


import PhotoShow from './photo_show';



const mapStateToProps = (state, ownProps) => {
    return {
      photo: state.entities.photos[ownProps.match.params.photoId],
      users: state.entities.users,
      currentUser: state.entities.users[state.session.id],
    //   currentUserId: state.session.id,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
        deletePhoto: (photoId) => dispatch(deletePhoto(photoId)),
        createComment: (comment) => dispatch(createComment(comment)),
        updateComment: (comment) => dispatch(updateComment(comment)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
        fetchUsers: () => dispatch(fetchUsers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);