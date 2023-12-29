import { createStore , combineReducers } from "redux";
import { ChangeModeReducer } from "./reducers/ChangeModeReducer";


const rootReducer = combineReducers({
        changeModeReducer : ChangeModeReducer
})

const store = createStore(rootReducer)

export default store