import { ADD_MESSAGE, DELETE_MESSAGE } from "./types";

export const addMessage = (roomId, message) => {
    return { type: ADD_MESSAGE, payload: {roomId, message}};
};

export const deleteMessage = (id) => {
    return { type: DELETE_MESSAGE };
};