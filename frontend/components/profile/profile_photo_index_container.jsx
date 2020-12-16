import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPhotos} from '../../actions/photo_actions'
import { fetchUsers} from '../../actions/user_actions'

import ProfilePhotoIndex from './profile_photo_index';

const mapStateToProps = (state) => {
    return ({
        photos: Object.values(state.entities.photos)
    });
};

const mapDispatchToProps = dispatch => {
    return {
        // fetchPhotos: () => dispatch(fetchPhotos()),
        // fetchUsers: () => dispatch(fetchUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePhotoIndex);