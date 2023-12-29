import { CHANGE_TO_DARK_MODE } from "../Constants";
import { CHANGE_TO_LIGHT_MODE } from "../Constants";

export const changeToLightMode =()=>{
    return {
        type : CHANGE_TO_LIGHT_MODE
    }
}
export const changeToDarkMode =()=>{
    return {
        type : CHANGE_TO_DARK_MODE
    }
}