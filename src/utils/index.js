import axios from "axios";

export const setTokenHeader = (token) => {
    if (token)
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    else delete axios.defaults.headers.common["Authorization"];
};

export const apiCall = (method, path, data) => {
    const config = {
        method: method.toLowerCase(),
        url: path,
        data: data || null
    };

    return new Promise((resolve, reject) => {
        return axios(config)
            .then((res) => resolve(res.data))
            .catch((error) => reject(error.response.data.error));
    });
};
