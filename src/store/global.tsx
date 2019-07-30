// type
const UPDATE_SCROLL_POSITION = 'UPDATE_SCROLL_POSITION';

// action by type
export const updateScroll = (scroll: Number) => ({ type: UPDATE_SCROLL_POSITION, scroll });

interface stateTypes {
    scroll: Number;
};

const initialState: stateTypes = {
    scroll: 0,
};

// case
export default function (state=initialState, action: any) {
    switch(action.type) {
        case UPDATE_SCROLL_POSITION:
            return {
                ...state,
                scroll: action.scroll,
            };
        default:
            return state;
    }
};