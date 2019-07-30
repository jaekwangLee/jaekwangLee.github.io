
// type
const UPDATE_ROOMS = 'UPDATE_ROOMS';

// action by type
export const updateRooms = (rooms: Array<any>) => ({ type: UPDATE_ROOMS, rooms });

interface stateTypes {
    rooms: Array<any>;
};

const initialState: stateTypes = {
    rooms: [],
};

// case
export default function (state=initialState, action: any) {
    switch(action.type) {
        case UPDATE_ROOMS:
            return {
                ...state,
                rooms: action.rooms,
            };
        default:
            return state;
    }
};