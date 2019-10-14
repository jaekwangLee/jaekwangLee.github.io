import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import * as post_api from '../../lib/api/post';

// middleware
import { createReduxThunk } from '../../lib/middleware';

// types
const WRITE = 'post/WRITE';
const WRITE_SUCCESS = 'post/WRITE_SUCCESS';
const WRITE_FAILURE = 'post/WRITE_FAILURE';

const GET_RAND_USER = 'post/GET_RAND_USER';
const GET_RAND_USER_SUCCESS = 'post/GET_RAND_USER_SUCCESS';
const GET_RAND_USER_FAILURE = 'post/GET_RAND_USER_FAILURE';

const GET_RAND_POST = 'post/GET_RAND_POST';
const GET_RAND_POST_SUCCESS = 'post/GET_RAND_POST_SUCCESS';
const GET_RAND_POST_FAILURE = 'post/GET_RAND_POST_FAILURE';

const EDIT_POST = 'post/EDIT_POST';
const EDIT_USER = 'post/EDIT_USER';

// actions
export const postWrite = createReduxThunk(WRITE, post_api.writePost);
export const getUser = createReduxThunk(GET_RAND_USER, post_api.getUser);
export const getPost = createReduxThunk(GET_RAND_POST, post_api.getPost);
export const editPost = createAction(EDIT_POST);
export const editUser = createAction(EDIT_USER);

// initalState
const initialState = {
    user_uid: '',
    user_token: '',
    contents: '',
};

// reducer
const authReducer = handleActions(
    {
        [EDIT_USER]: (state, { payload }) =>
            produce(state, draft => {
                draft.user_uid = payload.uid;
            }),
        [EDIT_POST]: (state, { payload }) =>
            produce(state, draft => {
                draft.contents = payload;
            }),
        [GET_RAND_USER_SUCCESS]: (state, { payload }) =>
            produce(state, draft => {
                const data = JSON.parse(payload);
                console.log(data);
                draft.user_uid = data.user_uid;
                draft.user_token = data.user_token;
            }),
        [GET_RAND_USER_FAILURE]: (state, action) =>
            produce(state, draft => {
                console.log('error: ', state, action);
            }),
        [GET_RAND_POST_SUCCESS]: (state, { payload }) =>
            produce(state, draft => {
                draft.contents = payload;
            }),
        [GET_RAND_POST_FAILURE]: (state, action) =>
            produce(state, draft => {
                console.log('error: ', state, action);
            }),
        [WRITE_SUCCESS]: (state, { payload }) =>
            produce(state, draft => {
                draft.user_uid = '';
                draft.user_token = '';
                draft.contents = '';
            }),
        [WRITE_FAILURE]: (state, action) =>
            produce(state, draft => {
                console.log(state, action);
            }),
    },
    initialState,
);
export default authReducer;
