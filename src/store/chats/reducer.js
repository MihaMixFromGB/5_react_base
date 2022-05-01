import { nanoid } from "nanoid";
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

const initialState = {
    chats: [],
    pending: false,
    error: null
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
        case ADD_CHAT_FIREBASE_START:
        case GET_CHATS_FIREBASE_START:
        case DELETE_CHAT_FIREBASE_START:
            return {
                ...state,
                pending: true,
                error: null
            };
        case ADD_CHAT_FIREBASE_SUCCESS:
            return {
                ...state,
                chats: [
                    ...state.chats,
                    action.payload.chat
                ],
                pending: false
            };
        case ADD_CHAT_FIREBASE_ERROR:
        case GET_CHATS_FIREBASE_ERROR:
        case DELETE_CHAT_FIREBASE_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload.error
            };
        case GET_CHATS_FIREBASE_SUCCESS:
            return {
                ...state,
                chats: action.payload.chats,
                pending: false
            };
        case DELETE_CHAT_FIREBASE_SUCCESS:
            return {
                ...state,
                chats: state.chats.filter(chat =>
                    chat.id !== action.payload.id
                ),
                pending: false
            };
        default:
            return state;
    }
}