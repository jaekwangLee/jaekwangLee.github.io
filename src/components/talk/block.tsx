import React from 'react';

interface Props {
    name: string;
    click: Function;
    style: any;
};

const RoomBlock:React.SFC<Props> = ({ name, click, style }) => (
    <div className='talk-block'>
        <span onClick={ () => { click(); }}  style={ style }>{ name }</span>
    </div>
);

export default RoomBlock;