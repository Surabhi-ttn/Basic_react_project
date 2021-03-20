import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-dbf1c-default-rtdb.firebaseio.com/'
});

export default instance;