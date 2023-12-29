import { createStore , combineReducers } from "redux";
import { ChangeModeReducer } from "./reducers/ChangeModeReducer";
import { ChangeFontReducer } from "./reducers/ChangeFontReducer";


const rootReducer = combineReducers({
        changeModeReducer : ChangeModeReducer ,
        fontReducer : ChangeFontReducer
})

const store = createStore(rootReducer)

export default store