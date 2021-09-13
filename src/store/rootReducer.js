import { combineReducers } from "redux";
import loginReducer from "./reducers/loginReducer";

const rootReducer = combineReducers({
    login: loginReducer,
})

export default rootReducer;