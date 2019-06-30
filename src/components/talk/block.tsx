import React from 'react';

interface Props {
    name: string;
    click: Function;
};

const RoomBlock:React.SFC<Props> = ({ name, click }) => (
    <div>
        <p onClick={ () => { click(); }}>{ name }</p>
    </div>
);

export default RoomBlock;