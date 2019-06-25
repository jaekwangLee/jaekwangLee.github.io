import React, { ReactNode } from 'react';

interface Props {
    id: string;
    children: ReactNode
}

export default class BlockWrapper extends React.PureComponent<Props> {
    render() {
        return <div id={ this.props.id } className='block-wrapper'>{ this.props.children }</div>
    }
}