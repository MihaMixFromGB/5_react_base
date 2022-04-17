import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';    // defaults to localStorage for web
import thunk from 'redux-thunk';
import { getPublicGistsApi, getPublicGistsForUserApi } from "../api/gists";
import { profileReducer } from "./profile";
import { chatReducer } from "./chats";
import { messagesReducer } from "./messages/reducer";
import { gistsReducer } from "./gists/reducer";
import { botMessage, cleanerAllMessages } from "./middlewares";

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatReducer,
    messages: messagesReducer,
    gists: gistsReducer
});

const persistConfig = {
    key: 'root',
    storage: storage,
    // blacklist: ['messages'],
    whitelist: ['profile']  // only these reducers will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    composeEnhancers(
        applyMiddleware(
            thunk.withExtraArgument({ getPublicGistsApi, getPublicGistsForUserApi }),
            botMessage,
            cleanerAllMessages
    )));
export const persistor = persistStore(store);