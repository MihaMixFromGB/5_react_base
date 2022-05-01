import { nanoid } from "nanoid";
import {
    ADD_MESSAGE,
    DELETE_MESSAGE,
    DELETE_ALL_MESSAGES,
    ADD_MESSAGE_FIREBASE_START,
    ADD_MESSAGE_FIREBASE_SUCCESS,
    ADD_MESSAGE_FIREBASE_ERROR,
    GET_MESSAGES_FIREBASE_START,
    GET_MESSAGES_FIREBASE_SUCCESS,
    GET_MESSAGES_FIREBASE_ERROR,
    DELETE_MESSAGES_FIREBASE_START,
    DELETE_MESSAGES_FIREBASE_SUCCESS,
    DELETE_MESSAGES_FIREBASE_ERROR
} from "./types";

const initialState = {
    messages: {},
    pending: false,
    error: null
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
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
        }
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
        case ADD_MESSAGE_FIREBASE_START:
        case GET_MESSAGES_FIREBASE_START:
        case DELETE_MESSAGES_FIREBASE_START:
        
            return {
                ...state,
                error: null,
                pending: true
            };
        case ADD_MESSAGE_FIREBASE_SUCCESS: {
            const { roomId, message } = action.payload;
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [roomId]: [
                        ...(state.messages[roomId] ?? []),
                        message
                    ]
                },
                pending: false
            };
        }
        case ADD_MESSAGE_FIREBASE_ERROR:
        case GET_MESSAGES_FIREBASE_ERROR:
        case DELETE_MESSAGES_FIREBASE_ERROR:
            return {
                ...state,
                error: action.payload.error,
                pending: false
            };
        case GET_MESSAGES_FIREBASE_SUCCESS: {
            const { roomId, messages } = action.payload;
            return {
                ...state,
                messages: {
                    [roomId]: [...messages]
                },
                pending: false
            };
        };
        case DELETE_MESSAGES_FIREBASE_SUCCESS:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.chatId]: []
                },
                pending: false
            };
        default:
            return state;
    };
};