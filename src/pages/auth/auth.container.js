import React from 'react';
import { connect } from 'react-redux';

// components
import Auth from './auth';

// actions
import { onLogin } from '../../reducer/modules/auth';

class AuthContainer extends React.PureComponent {
    render() {
        return <Auth {...this.props} />;
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
    login: ({ username, password }) => dispatch(onLogin({ username, password })),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AuthContainer);
