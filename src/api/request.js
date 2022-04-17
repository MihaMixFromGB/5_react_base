import axios from "axios";

class Request {
    constructor() {
        this.request = axios.create({
            baseURL: "https://api.github.com"
        });
    };

    get = url => {
        return this.request.get(url);
    };

    post = (url, body) => {
        return this.request.post(url, body);
    };

    delete = (url) => {
        return this.request.get(url);
    };
};

export const request = new Request();