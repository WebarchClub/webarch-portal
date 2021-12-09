import { SET_CURRENT_USER, LOGOUT } from "../actionTypes";
import { apiCall, setTokenHeader } from "../../utils/index";
import { setAlertMessage } from "./alerts";

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
    localStorage.removeItem("wptoken");
    dispatch({ type: LOGOUT });
};

// Auth user
export const authUser = (type, data) => (dispatch) => {
    // type = signup for Sign up and type = signin for Log in
    const method = "POST";
    const path = `https://webarch-api.herokuapp.com/commons/wp/auth/${type}`;

    return new Promise((resolve, reject) => {
        return apiCall(method, path, data)
            .then((res) => {
                localStorage.setItem("wptoken", res.token);
                setAuthToken(res.token);
                dispatch(setCurrentUser(res.user));
                dispatch(
                    setAlertMessage("User successfully logged in", "info")
                );
                resolve();
            })
            .catch((error) => {
                dispatch(setAlertMessage(error.message, "error"));
                reject();
            });
    });
};
