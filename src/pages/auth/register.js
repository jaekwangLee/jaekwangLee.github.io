import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';

// styled
import { AuthStyledBlock } from './auth.styled';
class Register extends React.Component {
    componentDidMount = () => {};

    render() {
        return (
            <AuthStyledBlock>
                <h2 style={{ marginBottom: 16, textAlign: 'center', fontWeight: 'bold' }}>My client</h2>
                <h3 style={{ marginBottom: 8, fontWeight: 'bold' }}>회원가입</h3>
                <p style={{ marginBottom: 8 }}>
                    <Input placeholder='이메일을 입력하세요' style={{ width: '100%', height: 40, borderWidth: 0, borderBottomWidth: 1 }} />
                </p>
                <p>
                    <Input placeholder='비밀번호를 입력하세요' style={{ width: '100%', height: 40, borderWidth: 0, borderBottomWidth: 1 }} />
                </p>
                <p>
                    <Input placeholder='비밀번호를 확인하세요' style={{ width: '100%', height: 40, borderWidth: 0, borderBottomWidth: 1 }} />
                </p>
                <p>
                    <Input placeholder='이름을 입력하세요' style={{ width: '100%', height: 40, borderWidth: 0, borderBottomWidth: 1 }} />
                </p>
                <p>
                    <Input placeholder='닉네임을 입력하세요' style={{ width: '100%', height: 40, borderWidth: 0, borderBottomWidth: 1 }} />
                </p>
                <Button type='primary' size='large' style={{ width: '100%', float: 'right' }}>
                    회원가입
                </Button>
            </AuthStyledBlock>
        );
    }
}

export default Register;
