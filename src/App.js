import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

// pages
import Auth from './pages/auth';
import Home from './pages/home';
import Post from './pages/post';

class App extends React.PureComponent {
    componentDidMount = () => {
        this.props.history.push('/post');
        // const token = localStorage.getItem('authToken');
        // if (!token || token == null) {
        //     this.props.history.push('/auth');
        // }
    };

    render() {
        return (
            <div id='app-container'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/auth' component={Auth} />
                    <Route path='/post' component={Post} />
                    <Route
                        render={() => (
                            <div>
                                <p>Not found</p>
                            </div>
                        )}
                    />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
