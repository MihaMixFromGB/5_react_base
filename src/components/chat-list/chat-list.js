import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { List } from "@mui/material";
import { Chat } from "./chat";
import { chatsSelector, createChat, deleteChat } from "../../store/chats";

export function ChatList() {
    const chats = useSelector(chatsSelector);
    const { roomId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleCreateClick = () => {
        const newChatName = prompt("Введите название чата:");
        if (!newChatName) {
            return;
        }

        const isExist = chats.some((chat) => chat.name === newChatName);
        if (isExist) {
            alert(`Чат ${newChatName} уже существует! Выберите другое название`);
            return;
        }

        dispatch(createChat(newChatName));
    };

    const handleDeleteClick = (event) => {
        const id = event.target.dataset["id"];
        dispatch(deleteChat(id));
        setTimeout(() => { navigate("/chats") })
    };

    return (
        <List component="nav">
            <button onClick={handleCreateClick}>ДОБАВИТЬ</button>
            {chats.map(chat => (
                <Chat
                    key={chat.id}
                    title={chat.name}
                    selected={chat.name === roomId}
                    handleListItemClick={() => {
                        navigate(`/chats/${chat.id}`);
                    }}>
                        <button key={"key_" + chat.id} data-id={chat.id} onClick={handleDeleteClick}>УДАЛИТЬ</button>
                </Chat>
            ))}
        </List>
    );
}