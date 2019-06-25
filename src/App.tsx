import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Routers from './router';
import Header from './components/header';
import { updateHome } from './store/global';
import moment from 'moment';

interface Props {
  history: any;
  location: any;
  match: any;
  is_home: Boolean;
  updateHome: Function;
}

interface State {
  clicked: Boolean;
}

class MainContainer extends React.PureComponent<Props, State> {
  state={
    clicked: false,
  };
  
  render() {
    const { is_home } = this.props;
    return (
      <div>
        <div id="app-container" className={ this.state.clicked ? 'animated' : '' }>
          <Header title='도전정신을 가진 꿈꾸는 웹/앱 개발자' name='이재광' />
          <Routers />
        </div>
        {
          !is_home ?
          <div className='global-home-button' onClick={ () => { this.goHome(); }}>
            <p>홈</p>
          </div>
          : null
        }
      </div>
    );
  }

  componentDidMount = () => {
    const { pathname } = this.props.location;
    if (pathname === '/') this.props.updateHome(true);
    else this.props.updateHome(false);
  }

  componentDidUpdate = (prevProps: any) => {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      const { pathname } = this.props.location;
      if (pathname === '/') { 
        this.props.updateHome(true); 
        this.setState({ clicked: false });
      } else {
        this.props.updateHome(false);
      }
    }
  }
  
  goHome = () => {
    this.setState({ clicked: true }, () => {
      setTimeout(() => {
        this.props.history.replace('/');
      }, 900);
    });
  }
}

const mapStateToProps = ({ homeReducer }:any) => ({
  is_home: homeReducer.is_home,
});

const mapDiaptchToProps = (dispatch: any) => ({
  updateHome: (is_home: Boolean) => dispatch(updateHome(is_home)),
});

export default withRouter(
  connect(mapStateToProps, mapDiaptchToProps)(MainContainer) as any
);