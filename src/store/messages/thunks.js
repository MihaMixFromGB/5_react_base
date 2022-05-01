import { nanoid } from "nanoid";
import {
    addMessageFbStart,
    addMessageFbSuccess,
    addMessageFbError,
    getMessagesFbStart,
    getMessagesFbSuccess,
    getMessagesFbError,
    deleteMessagesFbStart,
    deleteMessagesFbSuccess,
    deleteMessagesFbError
} from "./actions";

export const addMessageFb = (roomId, message) => async (dispatch, _, api) => {
    try {
        dispatch(addMessageFbStart());

        const messageFb = {
            ...message,
            id: nanoid(),
            dateTime: new Date().toLocaleString('ru')
        };
        await api.createMessageApi(roomId, messageFb);

        dispatch(addMessageFbSuccess(roomId, messageFb));
    } catch(error) {
        dispatch(addMessageFbError({error}));
    }
};

export const getMessagesFb = (roomId) => async (dispatch, _, api) => {
    try {
        dispatch(getMessagesFbStart());

        const snapshot = await api.getMessagesApi(roomId);
        const messages = Object.values(snapshot.val() ?? {});

        dispatch(getMessagesFbSuccess(roomId, messages));
    } catch(error) {
        dispatch(getMessagesFbError({error}));
    }
};

export const deleteMessagesFb = (chatId) => async(dispatch, _, api) => {
    try {
        dispatch(deleteMessagesFbStart());
        
        await api.deleteMessagesApi(chatId);

        dispatch(deleteMessagesFbSuccess({chatId}));
    } catch(error) {
        dispatch(deleteMessagesFbError(error));
    };
};