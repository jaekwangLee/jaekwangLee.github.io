import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// reducers
import auth from './modules/auth';
import post from './modules/post';

const reducers = combineReducers({ auth, post });
const store = createStore(reducers, applyMiddleware(thunk));
export default store;
