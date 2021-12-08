import { SET_CURRENT_USER, LOGOUT } from "../actionTypes";

export const authReducer = (
    state = { isAuthenticated: false, user: null },
    action
) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };

        default:
            return state;
    }
};
