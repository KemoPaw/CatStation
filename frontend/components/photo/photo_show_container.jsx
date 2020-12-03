import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPhoto, deletePhoto } from '../../actions/photo_actions'
import { createComment, deleteComment } from '../../actions/comment_actions'

import PhotoShow from './photo_show';



const mapStateToProps = (state, ownProps) => {
    return {
      photo: state.entities.photos[ownProps.match.params.photoId],
      users: state.entities.users,
      currentUser: state.entities.users[state.session.id],

    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
        deletePhoto: (photoId) => dispatch(deletePhoto(photoId)),
        createComment: (comment) => dispatch(createComment(comment)),


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);