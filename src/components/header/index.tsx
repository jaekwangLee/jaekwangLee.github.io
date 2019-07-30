import React from 'react';
import moment from 'moment';
import Wrapper from '../Common/block_wrapper';

interface Props {
    title: string;
    name: string;
}

const Header: React.SFC<Props> = ({ title, name }) => (
    <Wrapper id='header'>
        <div className='img-wrapper'></div>
        <div className='text-wrapper'>
            <h3>{ title } { name }</h3>
            <p>{ moment().format('YYYY년 MM월 DD일')}</p>
        </div>
    </Wrapper>
)
export default Header;