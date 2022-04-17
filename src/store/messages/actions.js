import { ADD_MESSAGE, DELETE_MESSAGE, DELETE_ALL_MESSAGES } from "./types";

export const addMessage = (roomId, message) => {
    return { type: ADD_MESSAGE, payload: {roomId, message}};
};

export const deleteMessage = (roomId, messageId) => {
    return { type: DELETE_MESSAGE, payload: {roomId, messageId} };
};

export const deleteAllMessages = (roomId) => {
    return { type: DELETE_ALL_MESSAGES, payload: roomId };
};
