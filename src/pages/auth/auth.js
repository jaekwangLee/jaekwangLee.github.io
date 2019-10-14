import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Button } from 'antd';

// styled
import { CustomInput } from '../../components/common/input';
import AuthStyledContainer, { AuthStyledBlock } from './auth.styled';
import Register from './register';

class Auth extends React.PureComponent {
    componentDidMount = () => {
        console.log('mount: ', this.props.user);
    };

    componentDidUpdate = () => {
        console.log('update: ', this.props.user);
    };

    render() {
        return (
            <AuthStyledContainer>
                <Switch>
                    <Route exact path='/auth' component={() => <AuthComponent login={this.props.login} />} />
                    <Route path='/auth/register' component={() => <Register {...this.props} />} />
                </Switch>
            </AuthStyledContainer>
        );
    }
}

const AuthComponent = ({ login }) => (
    <AuthStyledBlock>
        <h2 style={{ marginBottom: 16, textAlign: 'center', fontWeight: 'bold' }}>My client</h2>
        <h3 style={{ marginBottom: 8, fontWeight: 'bold' }}>로그인입니다</h3>
        <p style={{ marginBottom: 8 }}>
            <CustomInput labelConfig={{ htmlFor: 'email' }} inputConfing={{ id: 'email', placeholder: '이메일을 입력하세요', type: 'text' }} />
        </p>
        <p>
            <CustomInput labelConfig={{ htmlFor: 'password' }} inputConfing={{ id: 'password', placeholder: '비밀번호를 입력하세요', type: 'password' }} />
        </p>
        <Button
            type='primary'
            size='large'
            style={{ width: '100%' }}
            onClick={() => {
                const username = document.querySelector('#email').value;
                const password = document.querySelector('#password').value;
                login({ username, password });
            }}
        >
            로그인
        </Button>
        <div style={{ marginTop: 8 }}>
            <Link to='/auth/register' style={{ color: 'black', float: 'right' }}>
                회원가입
            </Link>
        </div>
    </AuthStyledBlock>
);
export default Auth;
