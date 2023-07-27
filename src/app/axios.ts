import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://phasionistar-api.onrender.com/'
});

export default instance;