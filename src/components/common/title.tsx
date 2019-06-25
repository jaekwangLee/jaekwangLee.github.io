import React from 'react';

interface Props {
    title: string;
}


const BlockTitle: React.SFC<Props> = ({ title }) => (
    <div>
        <h5 className='common-title'>{ title }</h5>
    </div>
)

export default BlockTitle;