import {
    // DELETE_ALL_MESSAGES,
    // deleteAllMessages,
    deleteMessagesFb
} from "../messages";
import { DELETE_CHAT_FIREBASE_SUCCESS } from "../chats";

export const cleanerAllMessages = store => next => action => {
    // if (action.type === DELETE_ALL_MESSAGES) {
    //     store.dispatch(deleteAllMessages(action.payload));
    // }
    if (action.type === DELETE_CHAT_FIREBASE_SUCCESS) {
        store.dispatch(deleteMessagesFb(action.payload.id));
    }

    return next(action);
};