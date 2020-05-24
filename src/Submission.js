import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cung-design-web.firebaseio.com/'
});

export default instance;