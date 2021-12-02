import {SET_ALERT, CLEAR_ALERT} from "../actionTypes"

// Set the alert message
export const setAlertMessage = (message, type) => (dispatch) => {
    dispatch({type: SET_ALERT, payload: {message, type}})
}

// Clear the alert message
export const clearAlertMessage = () => (dispatch) => {
    dispatch({type: CLEAR_ALERT})
}