import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { fetchPhotos, fetchFilteredPhotos} from '../../actions/photo_actions';
// import { createComment, deleteComment, updateComment, fetchComments } from '../../actions/comment_actions';
// import { fetchUsers} from '../../actions/user_actions';


import searchBar from './search_bar';



const mapStateToProps = (state, ownProps) => {

    return {
        photos: Object.values(state.entities.photos),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPhotos: () => dispatch(fetchPhotos()),
        fetchFilteredPhotos: (data) => dispatch(fetchFilteredPhotos(data)),

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(searchBar));