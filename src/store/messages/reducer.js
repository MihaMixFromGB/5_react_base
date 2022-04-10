import { nanoid } from "nanoid";
import { ADD_MESSAGE, DELETE_MESSAGE } from "./types";

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
        default:
            return state;
    };
};