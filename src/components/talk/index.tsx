import React from 'react';
import { withRouter } from 'react-router-dom';
import RoomBlock from './block';
import CreateBlock from './block';
import { connect } from 'react-redux';
import { createRoom, fetchRooms } from '../../lib/api';
import { updateRooms } from '../../store/talk';
import swal from 'sweetalert2';

// lib
import { comparePassword } from '../../lib/api';

interface Props {
    updateRooms: Function;
    rooms: Array<any>;
    history: any;
}

class TalkContainer extends React.PureComponent<Props> {
    render() {
        const { rooms } = this.props;
        return (
            <div>
            {
                rooms.map((room, index) => {
                    return (
                        <RoomBlock key={ index.toString() } name={ room.name } click={ () => { this.goChatRoom(room.uuid); } } style={{}} />
                    )
                })
            }
                <CreateBlock 
                    name='대화방 만들기' 
                    style={{
                        color: '#16b'
                    }}
                    click={ () => { this._createRoom(); }} 
                />
                <div className='clearfix' />
            </div>
        );
    }

    componentDidMount = async () => {
        const { data } = await fetchRooms();
        this.props.updateRooms(data);
    }

    _createRoom = async () => {
        const { value: room_name } = await swal.fire({
            title: '방의 제목을 설정해주세요.',
            input: 'text',
            inputPlaceholder: '방 제목',
            showCancelButton: true,
            cancelButtonText: '취소',
        });
        if (!room_name) return null

        const { value: room_password } = await swal.fire({
            title: '방의 비밀번호를 설정해주세요.',
            input: 'password',
            inputPlaceholder: '방 비밀번호',
            showCancelButton: true,
            cancelButtonText: '취소',
        })
        if (!room_password) return null

        const { data } = await createRoom(room_name, room_password);
        this.addNewRoom(data);
    }

    addNewRoom = (new_room: any) => {
        const { rooms } = this.props;
        const new_rooms = rooms.concat(new_room);
        this.props.updateRooms(new_rooms);
    }

    goChatRoom = async (room_id: string) => {
        const { value: room_password } = await swal.fire({
            title: '채팅방에 입장하시겠습니까?',
            input: 'password',
            inputPlaceholder: '비밀번호',
            showCancelButton: true,
            cancelButtonText: '취소',
        });
        if (!room_password) return null;

        const { data } = await comparePassword(room_id, room_password);
        if (data) {
            return this.props.history.push({
                pathname: `/talk/${ room_id }`,
                state: { room_id }
            });
        } else {
            return swal.fire({
                title: '잘못된 비밀번호',
                text: '비밀번호를 확인해주세요.',
            });
        }
    }
}

const mapStateToProps = ({ talkReducer }: any) => ({
    rooms: talkReducer.rooms
});

const mapDispatchToProps = (dispatch: any) => ({
    updateRooms: (rooms: any) => dispatch(updateRooms(rooms)),
});

export default withRouter(
    connect(
        mapStateToProps, mapDispatchToProps
    )(TalkContainer) as any
);