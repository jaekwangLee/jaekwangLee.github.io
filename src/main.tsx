import React from 'react';
import { connect } from 'react-redux';

import Introduce from './components/introduce';
import Portfoilo from './components/portfoilo';
import Experience from './components/experience';
import Programming from './components/programming';
import RecentNews from './components/recent';
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