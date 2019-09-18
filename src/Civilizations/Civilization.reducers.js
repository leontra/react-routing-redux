import { SPREAD_CIVILIZATIONS, RESET_STATE } from './../Constants/action_types';

const initialState = {
    civilizations: []
};

const CivilizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SPREAD_CIVILIZATIONS: 
            return Object.assign(
                {}, 
                state, 
                { civilizations: state.civilizations.concat(action.payload.list) }
            );
        case RESET_STATE: 
            return Object.assign( {}, initialState );
        default:
            return state;
    }
}

export default CivilizationReducer;
