import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MessageList} from './components/MessageList';

import './styles/style.scss';

export function App() {
  const [ messageList, setMessageList ] = useState([]);
  const [ textMessage, setTextMessage ] = useState("");
  
  useEffect(() => {
    const timerId = setTimeout(() => {
      const newMessageList = addDefaultMessage(messageList);
      if (newMessageList.length !== messageList.length) {
        setMessageList(newMessageList);
      }
    }, 1500);

    return () => {
      clearTimeout(timerId)
    };
  }, [messageList]);

  return (
    <div id='app' className='chat'>
      <Header />
      <MessageList messageList={messageList} />
      <div className='chat__input'>
        <input type="text" value={textMessage} onChange={(event) => setTextMessage(event.target.value)} />
        <button onClick={() => setMessageList( addMessage(messageList, textMessage) )}></button>
      </div>
    </div>
  );
}

function addMessage(list, text, author) {
  return [...list, {
    author: author || "batman",
    text: text,
    dateTime: new Date().toLocaleString('ru')
  }]
}

function addDefaultMessage(messageList) {
  if (messageList.length === 0) return [];
  
  const AUTHOR = "ROBOT";
  const authorOfLastMessage = messageList[messageList.length-1].author;

  if (authorOfLastMessage !== AUTHOR) {
    return addMessage(messageList, "OK!", AUTHOR);
  }

  return [...messageList];
}