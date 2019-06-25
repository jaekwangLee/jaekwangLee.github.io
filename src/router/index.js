import React from 'react';
import { Route, Switch } from 'react-router-dom';

// routes
import Main from '../main';
import RecentlyNews from '../components/recent';

const Roots = () => (
    <Switch>
        <Route path="/" component={ Main } exact />
        <Route path="/recent">
            <Route path="/:id" component={ RecentlyNews } />
        </Route>
        <Route component={ () => (
            <div>
                <h1>페이지를 찾을 수 없습니다.</h1>
                <h3>Page is not found, 404 Error</h3>
            </div>
        )} />
    </Switch>
);
export default Roots;