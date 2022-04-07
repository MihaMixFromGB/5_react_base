import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile";
import { chatReducer } from "./chats";
import { messagesReducer } from "./messages/reducer";

export const store = createStore(combineReducers({
    profile: profileReducer,
    chats: chatReducer,
    messages: messagesReducer
}));