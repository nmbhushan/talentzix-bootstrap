import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_AUTHORITY_DEV + '/api/' : process.env.NEXT_PUBLIC_AUTHORITY_PROD + '/api/',
    headers: { "Content-Type": "application/json" },
});

export default instance;
//Not to be used