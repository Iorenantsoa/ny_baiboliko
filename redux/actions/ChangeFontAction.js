import { CHANGE_FONT } from "../Constants"; 
import { ADD_FONT_SIZE } from "../Constants"; 
import { REDUCE_FONT_SIZE } from "../Constants"; 
 
export const changeFont = (font)=>{
    return {
        type : CHANGE_FONT,
        fontFamily : font 
    }
}

export const addFontSize = (size)=>{
    return {
        type : ADD_FONT_SIZE ,
        payload : size
    }
}


export const reduceFontSize = (size)=>{
    return {
        type : REDUCE_FONT_SIZE ,
        payload : size
    }
}