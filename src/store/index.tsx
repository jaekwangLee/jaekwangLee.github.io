import { combineReducers } from 'redux';
import recentReducer from './recent';
import globalReducer from './global';

export default combineReducers({
    recentReducer,
    globalReducer
});