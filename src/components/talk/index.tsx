import React from 'react';
import { withRouter } from 'react-router-dom';
import Socket from '../../lib/socket';
import CreateBlock from './block';
import { createRoom, fetchRooms } from '../../lib/api';

interface Props {

}

class TalkContainer extends React.PureComponent<Props> {
    render() {
        return (
            <div>
                <p>대기인원: </p>
                <CreateBlock name='대화방 만들기' click={ () => { this._createRoom(); }} />
            </div>
        );
    }

    componentDidMount = async () => {
        const rooms = await fetchRooms();
        console.log(rooms);
    }

    _createRoom = async () => {
        const data = await createRoom('test_room', '1111');
        console.log(data);
    }
}
export default withRouter(TalkContainer as any);