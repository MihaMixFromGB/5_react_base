import { Routes, Route } from "react-router-dom";
import { Layout, ChatList, MessageList } from "../components";

export function ChatsPage() {
    return (
        <>
        <Routes>
            <Route path="/" element={
                <Layout
                    chats={<ChatList/>}
                    messages={<h1>Выберите чат</h1>} />
            } />
            <Route path=":roomId" element={
                <Layout
                    chats={<ChatList/>}
                    messages={<MessageList />} />
            } />
        </Routes>
        </>
    );
}