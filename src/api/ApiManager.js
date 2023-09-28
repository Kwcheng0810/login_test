//Tried this method but this will show "user not found" error when click the button

import axios from "axios";

const ApiManager = axios.create({
    baseURL:'https://optimumtest.free.mockoapp.net/',
    responseType: 'json',
    withCredentials: true,
});

export default ApiManager