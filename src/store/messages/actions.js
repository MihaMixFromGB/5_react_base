import { CREATE_MESSAGE, DELETE_MESSAGE } from "./types";

export const createMessage = (roomId, message) => {
    return { type: CREATE_MESSAGE, payload: {roomId, message}};
};

export const deleteMessage = (id) => {
    return { type: DELETE_MESSAGE };
};