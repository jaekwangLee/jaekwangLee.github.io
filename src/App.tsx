import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// pages - router
import Routers from './router';

// components
import Header from './components/header';
import TopButton from './components/Common/Organisms/TopButton';

// lib
import { updateScroll } from './store/global';

interface Props {
  updateScroll: Function,
  scroll: Number,
}

class MainContainer extends React.PureComponent<Props> {
  render() {
    return (
      <div id="app-container">
        <Header title='도전정신을 가진 꿈꾸는 웹/앱 개발자' name='이재광' />
        <Routers />
        <TopButton />
      </div>
    );
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this._onScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this._onScroll);
  }

  _onScroll = (event: any) => {
    event.preventDefault();
    this.props.updateScroll(window.scrollY);
    console.log(this.props.scroll);
  }
}

const mapStateToProps = ({ globalReducer }: any) => ({
  scroll: globalReducer.scroll
});

const mapDispatchToProps = (dispatch: any) => ({
  updateScroll: (scroll: Number) => { dispatch(updateScroll(scroll)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainContainer as any));