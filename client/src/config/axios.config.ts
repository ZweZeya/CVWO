import axios from "axios";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    withCredentials: true,
    timeout: 10000,
});
