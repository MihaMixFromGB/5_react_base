import { request } from "./request";

export const getPublicGistsApi = (page) => {
    return request.get(`gists/public?page=${page}`);
};

export const getPublicGistsForUserApi = (name="SmartFinn") => {
    return request.get(`users/${name}/gists`);
};