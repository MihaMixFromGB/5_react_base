import { ADD_MESSAGE, addMessage } from "../messages";

export const botMessage = store => next => action => {
    const botMessage = {
        author: "BOT",
        text: "Hello from middleware"
    };

    if (action.type === ADD_MESSAGE &&
            action.payload.message.author !== botMessage.author) {
        setTimeout(() => {
            store.dispatch(addMessage(
                action.payload.roomId,
                {...botMessage}
            ));
        }, 1000);
    }

    return next(action);
};