import axios from "axios";

const instance = axios.create({
    baseURL: "https://my-chat-api.herokuapp.com"
});

export default instance;
