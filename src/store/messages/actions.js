import {
    ADD_MESSAGE,
    DELETE_MESSAGE,
    DELETE_ALL_MESSAGES,
    ADD_MESSAGE_FIREBASE_START,
    ADD_MESSAGE_FIREBASE_SUCCESS,
    ADD_MESSAGE_FIREBASE_ERROR,
    GET_MESSAGES_FIREBASE_START,
    GET_MESSAGES_FIREBASE_SUCCESS,
    GET_MESSAGES_FIREBASE_ERROR,
    DELETE_MESSAGES_FIREBASE_START,
    DELETE_MESSAGES_FIREBASE_SUCCESS,
    DELETE_MESSAGES_FIREBASE_ERROR
} from "./types";

export const addMessage = (roomId, message) => {
    return { type: ADD_MESSAGE, payload: {roomId, message}};
};
export const deleteMessage = (roomId, messageId) => {
    return { type: DELETE_MESSAGE, payload: {roomId, messageId} };
};
export const deleteAllMessages = (roomId) => {
    return { type: DELETE_ALL_MESSAGES, payload: roomId };
};

export const addMessageFbStart = () => {
    return { type: ADD_MESSAGE_FIREBASE_START }
};
export const addMessageFbSuccess = (roomId, message) => {
    return { type: ADD_MESSAGE_FIREBASE_SUCCESS, payload: { roomId, message } };
};
export const addMessageFbError = (error) => {
    return { type: ADD_MESSAGE_FIREBASE_ERROR, payload: { error } };
};

export const getMessagesFbStart = () => {
    return { type: GET_MESSAGES_FIREBASE_START };
};
export const getMessagesFbSuccess = (roomId, messages) => {
    return { type: GET_MESSAGES_FIREBASE_SUCCESS, payload: { roomId, messages } };
};
export const getMessagesFbError = (error) => {
    return { type: GET_MESSAGES_FIREBASE_ERROR, payload: { error } };
};

export const deleteMessagesFbStart = () => {
    return { type: DELETE_MESSAGES_FIREBASE_START };
};
export const deleteMessagesFbSuccess = (chatId) => {
    return { type: DELETE_MESSAGES_FIREBASE_SUCCESS, payload: { chatId } };
};
export const deleteMessagesFbError = (error) => {
    return { type: DELETE_MESSAGES_FIREBASE_ERROR, payload: { error } };
};