import React from 'react';

interface Props {
    subtitle: String;
}

const Subtitle: React.SFC<Props> = ({ subtitle }) => (
    <p className='common-subtitle'>{ subtitle }</p>
);

export default Subtitle;