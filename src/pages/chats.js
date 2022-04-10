import { Routes, Route } from "react-router-dom";
import { ChatLayout, ChatList, MessageList } from "../components";

export function ChatsPage() {
    return (
        <>
        <Routes>
            <Route path="/" element={
                <ChatLayout
                    chats={<ChatList/>}
                    messages={<h1>Выберите чат</h1>} />
            } />
            <Route path=":roomId" element={
                <ChatLayout
                    chats={<ChatList/>}
                    messages={<MessageList />} />
            } />
        </Routes>
        </>
    );
}