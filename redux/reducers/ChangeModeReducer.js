import { CHANGE_TO_DARK_MODE } from "../Constants";
import { CHANGE_TO_LIGHT_MODE } from "../Constants";

const initialState = {
    isDay: true 
} 

export const ChangeModeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TO_LIGHT_MODE:
            return {...state , isDay : true} 
        case CHANGE_TO_DARK_MODE:
            return {...state , isDay: false}
        default:
            return state;
    }
}