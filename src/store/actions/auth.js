import axios from "axios";
import { SET_CURRENT_USER, LOGOUT } from "../actionTypes";
import { apiCall, setTokenHeader } from "../../utils/index";

// Set current user
export const setCurrentUser = (user) => (dispatch) => {
    dispatch({ type: SET_CURRENT_USER, payload: user });
};

// Set auth token
export const setAuthToken = (token) => {
    setTokenHeader(token);
};

// Logout user
export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT });
};

// Auth user
export const authUser = (method, path, data) => {
    return new Promise((resolve, reject) => {
        return apiCall(method, path, data)
            .then((res) => resolve(res.data))
            .catch((error) => reject(error.response.data.error));
    });
};
