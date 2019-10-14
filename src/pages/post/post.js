import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Base64 } from 'js-base64';
import Swal from 'sweetalert2';
// styled
import { CustomInput, CustomInputToText, CustomTextarea } from '../../components/common/input';
import PostStyledWrapper, { PostStyledBlock } from './post.styled';

class Post extends React.PureComponent {
    componentDidMount = () => {
        // console.log('mount: ', this.props.uid, this.props.contents);
    };

    componentDidUpdate = () => {
        // console.log('contents: ', this.props.contents);
    };

    onUpload = async () => {
        let { contents, user_uid, user_token } = this.props;
        if (!contents) {
            return Swal.fire({ title: '글 등록 - 본문을 작성해주세요', type: 'info' });
        }
        const hash_tags = this.onDistributeHashes(contents);
        if (hash_tags === '{}') {
            return Swal.fire({ title: '글 등록 - 하나 이상의 태그를 작성해주세요', type: 'info' });
        }

        let main_content = [];
        main_content.push(Base64.encode(contents));
        const texts = this._arrayToJson(main_content);
        await this.props.write({ user_uid, user_token, content: texts, tag_list: hash_tags, open_range: 'public' });

        // 완료
        Swal.fire({ title: '글 등록을 완료하였습니다.', type: 'success' });
    };

    _arrayToJson = arr => {
        if (arr.length === 0) return '';
        let obj = {};
        const length = arr.length;
        for (let i = 0; i < length; i++) {
            obj[`${i}`] = arr[i];
        }
        return JSON.stringify(obj);
    };

    onDistributeHashes = contents => {
        let obj = {};
        let loop = 0;
        let temp_contents = contents;
        while (true) {
            let start_hash = temp_contents.indexOf('#');
            if (loop >= 3) break;
            if (start_hash === -1) break;

            temp_contents = temp_contents.slice(start_hash);
            let end_hash =
                temp_contents.indexOf(' ') !== -1
                    ? temp_contents.indexOf(' ')
                    : temp_contents.indexOf('\n') !== -1
                    ? temp_contents.indexOf('\n')
                    : temp_contents.length;
            const word = temp_contents.slice(1, end_hash);
            if (word.length > 0) {
                const reg = /^[가-힣|a-z|A-Z|0-9|_|\*]{1,20}$/;
                const result = reg.test(String(word));
                if (result) {
                    obj[`${loop}`] = word;
                    loop += 1;
                }
            }

            temp_contents = temp_contents.slice(end_hash);
        }
        return JSON.stringify(obj);
    };

    render() {
        return (
            <PostStyledWrapper>
                <PostStyledBlock>
                    <h2 style={{ marginBottom: 16, textAlign: 'center', fontWeight: 'bold' }}>Create Post</h2>
                    <h3 style={{ marginBottom: 8, fontWeight: 'bold' }}>글쓰기</h3>
                    <div style={{ marginBottom: 8, display: 'flex', flexDirection: 'row' }}>
                        <div style={{ width: '100%' }}>
                            <p style={{ fontWeight: '600' }}>user_uid</p>
                            <CustomInputToText
                                value={this.props.user_uid ? this.props.user_uid : '-'}
                                style={{ flex: 1, textIndent: '0px', fontSize: '8px', fontWeight: '500' }}
                                valueConfing={{ id: 'uid' }}
                            />
                        </div>
                        <div style={{ width: '100%' }}>
                            <p style={{ fontWeight: '600' }}>user_token</p>
                            <CustomInputToText
                                value={this.props.user_token ? this.props.user_token : '-'}
                                style={{ flex: 1, textIndent: '0px', fontSize: '8px', fontWeight: '500' }}
                                valueConfing={{ id: 'token' }}
                            />
                        </div>
                        <Button
                            onClick={() => {
                                this.props.getUser();
                            }}
                        >
                            계정 불러오기
                        </Button>
                    </div>
                    <div style={{ marginBottom: 9, display: 'flex', flexDirection: 'row' }}>
                        <CustomTextarea
                            labelConfig={{ htmlFor: 'contents' }}
                            textConfig={{
                                id: 'post',
                                placeholder: '글 내용을 작성하세요',
                                type: 'contents',
                                value: this.props.contents,
                                onChange: e => {
                                    this.props.edit(e.target.value);
                                },
                            }}
                        />
                        <Button
                            onClick={() => {
                                this.props.getPost();
                            }}
                        >
                            내용 불러오기
                        </Button>
                    </div>
                    <Button
                        type='primary'
                        size='large'
                        style={{ width: '100%' }}
                        onClick={() => {
                            this.onUpload();
                        }}
                    >
                        글 등록
                    </Button>
                </PostStyledBlock>
            </PostStyledWrapper>
        );
    }
}

export default Post;
