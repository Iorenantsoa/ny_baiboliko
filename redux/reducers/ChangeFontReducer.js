import { ADD_FONT_SIZE } from "../Constants"; 
import { REDUCE_FONT_SIZE } from "../Constants"; 
import { CHANGE_FONT } from "../Constants"; 

 

const initialState = {
    font : 'Lato_400Regular'  ,
    fontSize : 14
}

export const ChangeFontReducer =(state = initialState , action)=>{
    switch (action.type) {
        case CHANGE_FONT:
            return {...state  , font: action.fontFamily} 

        case ADD_FONT_SIZE:
            return {...state  , fontSize : state.fontSize + action.payload} 
        
        case REDUCE_FONT_SIZE:
            return {...state  , fontSize : state.fontSize - action.payload} 
        
        default:
            return state;
    }
} 