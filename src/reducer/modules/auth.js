import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import * as AUTH_API from '../../lib/api/auth';

// middleware
import { createReduxThunk } from '../../lib/middleware';

// types
const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';
const REGISTER = 'auth/REGISTER';

// actions
export const onLogin = createReduxThunk(LOGIN, AUTH_API.login);
export const onRegister = createReduxThunk(REGISTER);

// initalState
const initialState = {
    user: {
        username: '',
        password: '',
        name: '',
        nickname: '',
    },
};

// reducer
const authReducer = handleActions(
    {
        [LOGIN_SUCCESS]: (state, { payload }) =>
            produce(state, draft => {
                console.log(payload);
            }),
        [LOGIN_FAILURE]: (state, action) =>
            produce(state, draft => {
                console.log(state, action);
            }),
    },
    initialState,
);
export default authReducer;
