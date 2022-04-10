import { DELETE_ALL_MESSAGES, deleteAllMessages } from "../messages";

export const cleanerAllMessages = store => next => action => {
    if (action.type === DELETE_ALL_MESSAGES) {
        store.dispatch(deleteAllMessages(action.payload));
    }

    return next(action);
};