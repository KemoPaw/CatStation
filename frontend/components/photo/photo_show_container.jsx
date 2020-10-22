import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPhoto, deletePhoto } from '../../actions/photo_actions'
import PhotoShow from './photo_show';

const mapStateToProps = (state, ownProps) => {
    return ({
        photo: state.entities.photos[ownProps.match.params.photoId]
    });
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
        deletePhoto: (photoId) => dispatch(deletePhoto(photoId))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);