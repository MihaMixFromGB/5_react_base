import {
    CREATE_CHAT,
    DELETE_CHAT,
    ADD_CHAT_FIREBASE_START,
    ADD_CHAT_FIREBASE_SUCCESS,
    ADD_CHAT_FIREBASE_ERROR,
    GET_CHATS_FIREBASE_START,
    GET_CHATS_FIREBASE_SUCCESS,
    GET_CHATS_FIREBASE_ERROR,
    DELETE_CHAT_FIREBASE_START,
    DELETE_CHAT_FIREBASE_SUCCESS,
    DELETE_CHAT_FIREBASE_ERROR
} from "./types";

export const createChat = (name) => {
    return { type: CREATE_CHAT, payload: name };
}
export const deleteChat = (id) => {
    return { type: DELETE_CHAT, payload: id };
}

export const addChatFbStart = () => {
    return { type: ADD_CHAT_FIREBASE_START };
};
export const addChatFbSuccess = (chat) => {
    return { type: ADD_CHAT_FIREBASE_SUCCESS, payload: { chat } };
};
export const addChatFbError = (error) => {
    return { type: ADD_CHAT_FIREBASE_ERROR, payload: { error } };
};

export const getChatsFbStart = () => {
    return { type: GET_CHATS_FIREBASE_START };
};
export const getChatsFbSuccess = (chats) => {
    return { type: GET_CHATS_FIREBASE_SUCCESS, payload: { chats } };
};
export const getChatsFbError = (error) => {
    return { type: GET_CHATS_FIREBASE_ERROR, payload: { error } };
};

export const deleteChatFbStart = () => {
    return { type: DELETE_CHAT_FIREBASE_START };
};
export const deleteChatFbSuccess = (id) => {
    return { type: DELETE_CHAT_FIREBASE_SUCCESS, payload: { id } };
};
export const deleteChatFbError = (error) => {
    return { type: DELETE_CHAT_FIREBASE_ERROR, payload: { error } };
};