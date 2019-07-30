import React from 'react';
import { connect } from 'react-redux';

import Introduce from './pages/Introduce';
import Portfoilo from './pages/Portfolio';
import Experience from './pages/Experience';
import Programming from './pages/Programming';
import RecentNews from './pages/Recent';
import Connect from './components/footer';

import { showDetailNews } from './store/recent';

interface Props {
  updateShowRecent: Function;
}

class MainContainer extends React.PureComponent<Props> {
  render() {
    return (
      <div>
        <Experience />
        <Introduce />
        <Programming />
        <Portfoilo name='이재광' />
        <Connect />
        <RecentNews />
      </div>
    );
  }

  componentDidMount = () => {
    this.props.updateShowRecent(false);
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch: any) => ({
  updateShowRecent: (bool: any) => dispatch(showDetailNews(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);