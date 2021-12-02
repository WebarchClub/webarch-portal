import { SET_ALERT, CLEAR_ALERT } from "../actionTypes";

export const alertReducer = (state = null, action) => {
    switch (action.type) {
        case SET_ALERT:
            return action.payload;
        case CLEAR_ALERT:
            return null;
        default:
            return state;
    }
};
