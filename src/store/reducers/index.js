import { combineReducers } from "redux";
import { alertReducer } from "./alerts";

const reducers = combineReducers({
    alert: alertReducer
});

export default reducers;
