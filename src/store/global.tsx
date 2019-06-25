// type
const IS_HOME = 'IS_HOME';

// action by type
export const updateHome = (is_home: Boolean) => ({ type: IS_HOME, is_home: is_home });

interface stateTypes {
    is_home: Boolean;

};

const initialState: stateTypes = {
    is_home: true,
};

// case
export default function (state=initialState, action: any) {
    switch(action.type) {
        case IS_HOME:
            return {
                ...state,
                is_home: action.is_home,
            };
        default:
            return state;
    }
};