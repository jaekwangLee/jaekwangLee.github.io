import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Routers from './router';
import Header from './components/header';
import { updateHome, updateTalk } from './store/global';

interface Props {
  history: any;
  location: any;
  match: any;
  is_home: Boolean;
  is_talk: Boolean;
  updateHome: Function;
  updateTalk: Function;
}

interface State {
  clicked: Boolean;
}

class MainContainer extends React.PureComponent<Props, State> {
  state={
    clicked: false,
  };
  
  render() {
    const { is_home, is_talk } = this.props;
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
        {
          !is_talk ?
          <div className='global-talk-button' onClick={ () => { this.goTalk(); }}>
            <p>톡</p>
          </div>
          : null
        }
      </div>
    );
  }

  componentDidMount = () => {
    const { pathname } = this.props.location;
    if (pathname === '/') {
      this.props.updateHome(true);
      this.props.updateTalk(false);

    } else if(pathname === '/talk') {
      this.props.updateHome(false);
      this.props.updateTalk(true);

    } else {
      this.props.updateHome(false);
      this.props.updateTalk(false);
    }
  }

  componentDidUpdate = (prevProps: any) => {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      const { pathname } = this.props.location;
      if (pathname === '/') {
        this.props.updateHome(true);
        this.props.updateTalk(false);
        this.setState({ clicked: false });
        
      } else if(pathname === '/talk') {
        this.props.updateHome(false);
        this.props.updateTalk(true);
        this.setState({ clicked: false });
  
      } else {
        this.props.updateHome(false);
        this.props.updateTalk(false);
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

  goTalk = () => {
    this.setState({ clicked: true }, () => {
      setTimeout(() => {
        this.props.history.push('/talk');
      }, 900);
    });
  }
}

const mapStateToProps = ({ globalReducer }:any) => ({
  is_home: globalReducer.is_home,
  is_talk: globalReducer.is_talk,
});

const mapDiaptchToProps = (dispatch: any) => ({
  updateHome: (is_home: Boolean) => dispatch(updateHome(is_home)),
  updateTalk: (is_talk: Boolean) => dispatch(updateTalk(is_talk)),
});

export default withRouter(
  connect(mapStateToProps, mapDiaptchToProps)(MainContainer) as any
);