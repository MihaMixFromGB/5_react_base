import { nanoid } from "nanoid";
import { ADD_MESSAGE, DELETE_MESSAGE, DELETE_ALL_MESSAGES } from "./types";

const initialState = {
    messages: {}
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const { roomId, message } = action.payload;
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [roomId]: [
                        ...state.messages[roomId] ?? [],
                        {
                            id: nanoid(),
                            author: message.author,
                            text: message.text,
                            dateTime: new Date().toLocaleString('ru')
                        }
                    ]
                }
            };
        case DELETE_MESSAGE:
            return;
        case DELETE_ALL_MESSAGES:
            const newMessagesList = state.messages.filter(
                chat => chat.id !== action.payload);
            return {
                ...state,
                messages: {
                    ...newMessagesList
                }
            }
        default:
            return state;
    };
};