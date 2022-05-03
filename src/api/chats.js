import { child, ref, get, push, remove } from "firebase/database";
import { database } from "./firebase";

export const createChatApi = (chat) => {
  return push(child(ref(database), `chats/${chat.id}`), chat);
};

export const getChatsApi = () => {
  return get(child(ref(database), `chats`));
};

export const removeChatApi = (chatId) => {
  return remove(child(ref(database), `chats/${chatId}`));
};