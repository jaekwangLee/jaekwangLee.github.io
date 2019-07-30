import axios from 'axios';
export const req = axios.create({
    baseURL: 'https://websters.store'
});

export const createRoom = async (name, password) => {
    if (typeof name !== 'string' || typeof password !== 'string') return null;
    let result = null;
    try {
        const { data } = await req.post('/api/create/room', { name, password });
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

export const comparePassword = async (uuid, password) => {
    let result = null;
    try {
        const { data } = await req.post('/api/compare/room', { uuid, password });
        result = data;
    } catch(e) {
        console.error('Error occured in server', e);
    }
    return result;
}

export const fetchBefore = async (room_id) => {
    let result = null;
    try {
        const { data } = await req.post('/api/chat/before/room', { uuid: room_id });
        result = data;
    } catch(e) {
        console.error('Error occured in server' ,e);
    }
    return result;
}