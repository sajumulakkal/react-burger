import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-berger-6e7bb.firebaseio.com'
});

export default instance;