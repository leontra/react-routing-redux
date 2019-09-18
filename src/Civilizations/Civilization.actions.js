import { SPREAD_CIVILIZATIONS } from "../Constants/action_types";

export const spreadCivilizations = list => ({ 
    type: SPREAD_CIVILIZATIONS, 
    payload: {
        list: list
    } 
});
