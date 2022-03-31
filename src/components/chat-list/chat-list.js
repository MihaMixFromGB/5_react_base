import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { List } from "@mui/material";
import { Chat } from "./chat";

export function ChatList() {
    const [chats] = useState([{
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
    }]);
    const navigate = useNavigate();
    const { roomId } = useParams();

    return (
        <List component="nav">
            {chats.map(chat => (
                <Chat
                    key={chat.id}
                    title={chat.name}
                    selected={chat.name === roomId}
                    handleListItemClick={() => {
                        navigate(`/chats/${chat.name}`);
                    }} />
            ))}
        </List>
    );
}