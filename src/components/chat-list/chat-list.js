import { useState } from "react";
import { List } from "@mui/material";
import { Chat } from "./chat";

export function ChatList() {
    const chats = [{
        id: 1,
        name: "room1"
    },
    {
        id: 2,
        name: "room2"
    },
    {
        id: 3,
        name: "room3"
    }];
    const [selectedIndex, setSelectedIndex] = useState(1);

    return (
        <List component="nav">
            {chats.map(chat => {
                return <Chat 
                    key={chat.id}
                    title={chat.name}
                    selected={selectedIndex === chat.id}
                    handleListItemClick={() => setSelectedIndex(chat.id)} />
            })}
        </List>
    );
}