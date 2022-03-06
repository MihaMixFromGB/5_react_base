import { Message } from "./Message";

export function MessageList({messageList}) {
    const listItems = messageList.map((item) => <li key={item.dateTime}>{Message(item)}</li>);
    return (
        <ul className="chat__list">{listItems}</ul>
    );
}