import axios from "axios";

const ApiManager = axios.create({
    baseURL:'https://test-login-page.free.mockoapp.net/',
    responseType: 'json',
    withCredentials: true,
});

export default ApiManager