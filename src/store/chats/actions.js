import { CREATE_CHAT, DELETE_CHAT } from "./types";

export const createChat = (name) => {
    return { type: CREATE_CHAT, payload: name };
}

export const deleteChat = (id) => {
    return { type: DELETE_CHAT, payload: id };
}