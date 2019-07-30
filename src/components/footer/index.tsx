import React from 'react';
import Wrapper from '../Common/block_wrapper';
import Title from '../Common/title';
import Line from './line';

interface Props {
    
}

interface State {
    
}

class Connect_Footer extends React.PureComponent<Props, State> {
    render() {
        return (
            <Wrapper id='footer' >
                <Title title='웹/앱 개발자 이재광과 함께 하려면?' />
                <Line
                    title='연락처'
                    info='010-8005-9417'
                    timing={ 0 }
                />
                <Line
                    title='이메일'
                    info='bca1990@naver.com'
                    timing={ 2000 }
                />
                <Line
                    title='이메일2'
                    info='bca1990@gmail.com'
                    timing={ 4000 }
                />
            </Wrapper>
        )
    }
}

export default Connect_Footer;