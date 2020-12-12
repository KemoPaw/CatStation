import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createComment, deleteComment, updateComment } from '../../actions/comment_actions';
import { fetchUsers} from '../../actions/user_actions';


import Comments from './comments';



const mapStateToProps = (state, ownProps) => {
    return {
    //   photo: state.entities.photos[ownProps.match.params.photoId],
    //   users: state.entities.users,
      currentUser: state.entities.users[state.session.id],
      currentUserId: state.session.id,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createComment: (comment) => dispatch(createComment(comment)),
        updateComment: (comment) => dispatch(updateComment(comment)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
        // fetchUsers: () => dispatch(fetchUsers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);