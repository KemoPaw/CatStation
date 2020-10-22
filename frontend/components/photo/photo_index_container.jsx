import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPhotos} from '../../actions/photo_actions'
import PhotoIndex from './photo_index';

const mapStateToProps = (state) => {
    return ({
        photos: Object.values(state.entities.photos)
    });
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPhotos: () => dispatch(fetchPhotos())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);