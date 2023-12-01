import axios from 'axios';


export const getAuthToken = () => {
    return window.localStorage.getItem('auth_token');
};

export const setAuthHeader = (token) => {
    window.localStorage.setItem('auth_token', token);
};

export const getUserId = () => {
    return window.localStorage.getItem('user_id');
};

export const setUserId = (id) => {
    window.localStorage.setItem('user_id', id);
};

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const request = (method, url, data) => {

    let headers = {};
    if (getAuthToken() !== null && getAuthToken() !== "null") {
        headers = {
            'Authorization': `Bearer ${getAuthToken()}`,
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true'
        };
    }

    return axios({
        method: method,
        url: url,
        headers: headers,
        data: data,

    });
};