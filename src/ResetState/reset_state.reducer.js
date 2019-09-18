import { RESET_STATE } from './../Constants/action_types';

const defaultState = {
    civilizations: []
};

const ResetStateReducer = (state = defaultState, action) => {
    switch (action.type) {
        case RESET_STATE: 
            return Object.assign( {}, defaultState );
        default:
            return state;
    }
}

export default ResetStateReducer;
