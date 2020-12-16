import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPhoto, deletePhoto , fetchPhotos} from '../../actions/photo_actions';
// import { createComment, deleteComment, updateComment, fetchComments } from '../../actions/comment_actions';
import { fetchUsers} from '../../actions/user_actions';


import Profile from './profile';



const mapStateToProps = (state, ownProps) => {
    let profileUser; 
    Object.values(state.entities.users).forEach(user => { 
        if (user.username === ownProps.match.params.username) { 
            profileUser = user.username;
        }
    });
    return {
    //   photo: state.entities.photos[ownProps.match.params.photoId],
        photos: Object.values(state.entities.photos),
    //   users: state.entities.users,
      currentUser: state.entities.users[state.session.id],
      profileUser,
    //   allComments: state.entities.comments,
    //   currentUserId: state.session.id,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
        fetchPhotos: () => dispatch(fetchPhotos()),
        // deletePhoto: (photoId) => dispatch(deletePhoto(photoId)),
        // createComment: (comment) => dispatch(createComment(comment)),
        // updateComment: (comment) => dispatch(updateComment(comment)),
        // deleteComment: (commentId) => dispatch(deleteComment(commentId)),
        // fetchComments: () => dispatch(fetchComments()),
        fetchUsers: () => dispatch(fetchUsers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);