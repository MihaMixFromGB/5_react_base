import { nanoid } from "nanoid";
import { CREATE_CHAT, DELETE_CHAT } from "./types";

const initialState = {
    chats: [{
        id: "1",
        name: "room1"
    },
    {
        id: "2",
        name: "room2"
    },
    {
        id: "3",
        name: "room3"
    }]
};

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CHAT:
            return {
                ...state,
                chats: [
                    ...state.chats,
                    {
                        id: nanoid(),
                        name: action.payload
                    }
                ]
            };
        case DELETE_CHAT:
                return {
                    ...state,
                    chats: state.chats.filter(chat => 
                        chat.id !== action.payload)
                };
        default:
            return state;
    }
}