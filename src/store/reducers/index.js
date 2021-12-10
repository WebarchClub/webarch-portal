import { combineReducers } from "redux";
import { alertReducer } from "./alerts";
import { authReducer } from "./auth";

const reducers = combineReducers({
    alert: alertReducer,
    auth: authReducer
});

export default reducers;
