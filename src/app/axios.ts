import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://phasionphomer.onrender.com/'
});

export default instance;