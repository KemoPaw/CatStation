import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPhoto } from '../../actions/photo_actions'
import PhotoIndex from './photo_index';

const mapStateToProps = (state) => {
    return ({
        photo: Object.values(state.entities.photos)
    });
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);