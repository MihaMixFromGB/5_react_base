import { Layout, Header, ChatList, MessageList } from "./components";

export function App() {
  return (
    <>
      <Layout
        header={<Header />}
        chats={<ChatList/>}
        messages={<MessageList />}
      />
    </>
  );
}