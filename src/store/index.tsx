import { combineReducers } from 'redux';
import recentReducer from './recent';
import talkReducer from './talk';
import globalReducer from './global';

export default combineReducers({
    recentReducer,
    talkReducer,
    globalReducer
});