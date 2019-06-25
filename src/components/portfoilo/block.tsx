import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const Block: React.SFC<Props> = ({ children }) => (
    <div className='port-block'>
        <div className='block-img-wrapper'></div>
        <div>
            { children }
        </div>
    </div>
);

export default Block;