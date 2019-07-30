import React from 'react';
import { withRouter } from 'react-router-dom';
import io from '../../lib/socket';

// lib
import { fetchBefore } from '../../lib/api';
import { HEADER_HEIGHT, NAMES } from '../../lib/varables';

class TalkingRoom extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state={
            room: '',
            chat_history: [],
            user_name: '',
            users: [],
        };
    }

    render() {
        const { chat_history, users } = this.state;

        return (
            <div style={{ position: 'relative'}}>
                {/* 채팅 뷰터*/}
                <div id='chat-viewer' style={{ height: `calc(100vh - ${ HEADER_HEIGHT+80}px)`, maxHeight: `calc(100vh - ${ HEADER_HEIGHT+80}px)`, overflow: 'scroll', scrollBehavior: 'smooth' }}>
                {
                    chat_history.map((chat, index) => {
                        return (
                            <div key={ index.toString() } className='chat-box'>
                                <h5>익명의 { NAMES[chat.user] }</h5>
                                <p>{ chat.contents }</p>
                            </div>
                        )
                    })
                }
                </div>
                {/* 채팅 */}
                <div id='chat-input'>
                    <div className='input' contentEditable onKeyDown={ this.onSubmit } placeholder='..?'></div>
                </div>
                {/* 유저목록 */}
                <div id='chat-user-list'>
                {
                    users.map((user, index) => {
                        return (
                            <span className='chat-user' key={ index.toString() }>익명의 { NAMES[user] }</span>
                        )
                    })
                }
                </div>
            </div>
        )
    }

    componentDidMount = () => {
        const { state } = this.props.history.location;

        if (state && state.room_id) {
            this.setState({ room: state.room_id }, () => {
                this.fetchBeforeChat(state.room_id);
                io.emit('join_room', {
                    room_id: state.room_id,
                });
            });
        } else {
            this.props.history.push('/talk');
        }
        this.attachSockets();
    }

    componentWillUnmount = () => {
        const { room, user_name } = this.state;
        // 방 나가기 처리
        
        io.emit('room_out', {
            room_id: room,
            user: user_name
        });
    }

    fetchBeforeChat = async (room_id) => {
        const { data } = await fetchBefore(room_id);
        this.setState({ chat_history: data });
    }

    onSubmit = (e) => {
        if (e.keyCode === 13 && !e.ctrlKey) {
            e.preventDefault();
            let chat = document.querySelector('.input');
            chat = chat.innerHTML;
            if (chat === '' || typeof chat !== 'string') return null;
            document.querySelector('.input').innerHTML = '';
    
            // socket - flash
            io.emit('message', {
                room_id: this.state.room,
                chat,
                user: this.state.user_name
            });
            
            // mongodb - save

        }

        return null;
    }

    scrollToBottom = () => {
        document.querySelector('#chat-viewer').scrollTo(0, document.querySelector('#chat-viewer').scrollHeight);
    }

    attachSockets = () => {
        io.on('join_room', (data) => {
            if (data === 'full_room') {
                return this.props.history.goBack();
            }
            if (this.state.user_name) {
                this.setState({ users: data.users });
            } else {
                this.setState({ 
                    users: data.users,
                    user_name: data.user_name,
                });
            }
        });

        io.on('message', (msg) => {
            const { chat_history } = this.state;
            const _chat = chat_history.concat(msg);
            this.setState({ chat_history: _chat }, () => {
                this.scrollToBottom();
            });
        });

        io.on('room_out', (users) => {
            this.setState({ users });
        });

        io.on('broadcast', (data) => {
            if (typeof data === 'string') {
                io.emit('alive_user', {
                    room_id: this.state.room,
                    user: this.state.user_name
                });
            }
            
            if (typeof data === 'object') { // join user check
                data.some((room, i) => {
                    if (room.id === this.state.room) {
                        this.setState({ users: room.users });
                    }
                })
            }
        });
    }

    detachSockets = () => {

    }
}


export default withRouter(TalkingRoom);