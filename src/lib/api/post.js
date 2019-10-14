import axios from '../axios';

export const getUser = () => {
    return axios.post('/user/account/get_fuser_uid');
};

export const getPost = () => {
    return axios.post('/post/post/get_gdr_content');
};

export const writePost = data => {
    console.log('data: ', data);
    return axios.post('/post/post/upload_post', data);
};
