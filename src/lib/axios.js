import Axios from 'axios';
import { BASE_URL } from './variables';

const axios = Axios.create();

axios.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4'; //헤더 설정
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 인터셉터 설정
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return error;
    },
);

export default axios;
