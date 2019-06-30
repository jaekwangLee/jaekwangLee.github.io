import axios from 'axios';
export const req = axios.create({
    baseURL: 'http://35.237.250.47/'
});

export const createRoom = async (name, password) => {
    if (typeof name !== 'string' || typeof password !== 'string') {
        return null;
    }

    let result = null;
    try {
        const { data } = await req.post('/api/create/room', {
            name, password
        });
        result = data;
    } catch(e) {
        console.error('Error occured in server on create room');
    }
    return result;
}

export const fetchRooms = async () => {
    let result = null;
    try {
        const { data } = await req.post('/api/fetch/room/all');
        result = data;
    } catch(e) {
        console.error('Error occured in sercer ', e);
    }
    return result;
}