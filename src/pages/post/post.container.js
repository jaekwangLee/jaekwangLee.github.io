import React from 'react';
import { connect } from 'react-redux';

// components
import Post from './post';
import { editPost, editUser, postWrite, getPost, getUser } from '../../reducer/modules/post';

class AuthContainer extends React.PureComponent {
    render() {
        return <Post {...this.props} />;
    }
}

const mapStateToProps = state => ({
    user_uid: state.post.user_uid,
    user_token: state.post.user_token,
    contents: state.post.contents,
});

const mapDispatchToProps = dispatch => ({
    edit: post => dispatch(editPost(post)),
    editUser: user => dispatch(editUser(user)),
    getPost: () => dispatch(getPost()),
    getUser: () => dispatch(getUser()),
    write: data => dispatch(postWrite(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AuthContainer);
