import { nanoid } from "nanoid";
import { removeChatApi } from "../../api/chats";
import {
    addChatFbStart,
    addChatFbSuccess,
    addChatFbError,
    getChatsFbError,
    getChatsFbStart,
    getChatsFbSuccess,
    deleteChatFbStart,
    deleteChatFbSuccess,
    deleteChatFbError
 } from "./actions";

export const addChatFb = (name) => async (dispatch, _, api) => {
    try {
        dispatch(addChatFbStart());

        const newChat = {
            id: nanoid(),
            name: name
        };

        await api.createChatApi(newChat);

        dispatch(addChatFbSuccess(newChat));
    } catch(error) {
        dispatch(addChatFbError({error}));
    }
};

export const getChatsFb = () => async (dispatch, _, api) => {
    const chats = [];
    try {
        dispatch(getChatsFbStart());

        const snapshot = await api.getChatsApi();
        snapshot.forEach(snap => {
            const rawData = Object.values(snap.val());
            chats.push(rawData[0]);
        });

        dispatch(getChatsFbSuccess(chats));
    } catch(error) {
        dispatch(getChatsFbError({error}));
    }
};

export const deleteChatFb = (chatId) => async (dispatch, _, api) => {
    try {
        dispatch(deleteChatFbStart());

        await removeChatApi(chatId);

        dispatch(deleteChatFbSuccess(chatId));
    } catch(error) {
        dispatch(deleteChatFbError({error}));
    }
};