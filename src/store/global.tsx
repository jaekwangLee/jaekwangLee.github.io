// type
const IS_HOME = 'IS_HOME';
const IS_TALK = 'IS_TALK';

// action by type
export const updateHome = (is_home: Boolean) => ({ type: IS_HOME, is_home });
export const updateTalk = (is_talk: Boolean) => ({ type: IS_TALK, is_talk });
interface stateTypes {
    is_home: Boolean;
    is_talk: Boolean;
};

const initialState: stateTypes = {
    is_home: true,
    is_talk: false,
};

// case
export default function (state=initialState, action: any) {
    switch(action.type) {
        case IS_HOME:
            return {
                ...state,
                is_home: action.is_home,
            };
        case IS_TALK:
            return {
                ...state,
                is_talk: action.is_talk
            };
        default:
            return state;
    }
};