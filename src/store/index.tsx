import { combineReducers } from 'redux';
import recentReducer from './recent';
import homeReducer from './global';

export default combineReducers({
    recentReducer,
    homeReducer
});