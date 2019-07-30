import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import './styles';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';

const stores = createStore(store);

ReactDOM.render(
<Provider store={ stores }>
    <HashRouter>
        <App />
    </HashRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
