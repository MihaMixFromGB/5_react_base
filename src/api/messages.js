import { child, ref, get, push, remove } from "firebase/database";
import { database } from "./firebase";

export const createMessageApi = (chatId, message) => {
  return push(child(ref(database), `messages/${chatId}`), message);
};

export const getMessagesApi = (chatId) => {
  return get(child(ref(database), `messages/${chatId}`));
};

// @TODO - сделать запрос удаления
export const deleteMessageApi = (chatId, messageId) => {
  return remove(child(ref(database), `messages/${chatId}/${messageId}`));
};

export const deleteMessagesApi = (chatId) => {
  return remove(child(ref(database), `messages/${chatId}`));
};