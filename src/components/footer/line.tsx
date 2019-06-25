import React from 'react';

interface Props {
    title: string;
    info: string;
    timing: number;
}

interface State {
    titles: string;
    infoes: string;
    lines: string;
}

class lineWithText extends React.PureComponent<Props, State>  {

    state={
        titles: 'footer-title',
        infoes: 'footer-info',
        lines: 'footer-animate-line'
    }

    render() {
        return (
            <div className='footer-line'>
                <div className={ this.state.titles }>
                    <p>{ this.props.title }</p>
                </div>
                <div className={ this.state.lines }>
                    <div className='line'></div>
                </div>
                <div className={ this.state.infoes }>
                    <p>{ this.props.info }</p>
                </div>
            </div>
        )
    }

    componentDidMount = () => {
        this._activation(this.props.timing);
    }

    _activation = (timing: number) => {
        setTimeout(() => { this.setState({ titles: 'footer-title active' }); }, timing);
        setTimeout(() => { this.setState({ lines: 'footer-animate-line active' }); }, timing + 500);
        setTimeout(() => { this.setState({ infoes: 'footer-info active' }); }, timing + 1500);
    }
}

export default lineWithText;