import React from 'react';

interface Props {
    timing: number;
    stacks: Number;
    on_horizontal: Boolean;
    on_vertical: Boolean;
    name: String;
}

interface State {
    h_classNames: String;
    v_classNames: String;
    i_classNames: String;
}

class Step extends React.PureComponent<Props, State> {
    state={
        h_classNames: 'step-animation-horizontal',
        v_classNames: 'step-animation-vertical',
        i_classNames: 'infobox'
    }

    render() {
        let stacks: any = this.props.stacks;
        return (
            <div className='step'>
                <div style={{ width: '100%', height: `${ 30 * stacks }px` }}></div>
                <p style={{ bottom:`${30 * stacks}px` }} className={ this.state.i_classNames }>{ this.props.name }</p>
                { this.props.on_horizontal ? <div className={ this.state.h_classNames } /> : null }
                { this.props.on_vertical ? <div className={ this.state.v_classNames } /> : null }
            </div>
        )
    }

    componentDidMount = () => {
        this._activation(this.props.timing);
    }

    _activation = (timer: number) => {
        setTimeout(() => { this.setState({ i_classNames: 'infobox active' }); }, timer);
        setTimeout(() => { this.setState({ h_classNames: 'step-animation-horizontal active' }); }, timer);
        setTimeout(() => { this.setState({ v_classNames: 'step-animation-vertical active' }); }, timer + 500);
    }
}
export default Step;