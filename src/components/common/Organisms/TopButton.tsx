import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Fan from '../Molecules/Fan';

// variables
import { DISPLAY_TOP_BUTTON } from '../../../variables';

interface Props {
    scroll: Number,
}

class TopButton extends React.PureComponent<Props> {
    render() {
        if (this.props.scroll <= DISPLAY_TOP_BUTTON) return null;
        return (
            <div id='top-button' onClick={ () => { this._click(); }}>
                <div className='top-button-body'></div>
                <div className='top-button-tail'></div>
                <Fan />
                <Fan />
                <Fan />
                <Fan />
            </div>
        );
    }

    _click = () => {
        this._down(30);
        
    }

    _down = (back: Number) => {
        const _now: any = document.getElementById('top-button');
        console.log(_now);
        _now.style.bottom = 30
    }

    _up = (up: Number) => {

    }
}

const mapStateToProps = ({ globalReducer }: any) => ({
    scroll: globalReducer.scroll
});

const mapDispatchToProps = (dispatch: any) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopButton as any))