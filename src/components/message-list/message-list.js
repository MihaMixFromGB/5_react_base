import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { makeStyles } from '@mui/styles';
import { Message } from "./message";
import classNames from 'classnames';

import styles from "./message-list.module.css";

const useStyles = makeStyles((theme) => ({
    list: {
        backgroundColor: theme.palette.primary.main
    }
}));

export function MessageList() {
    const [ messageList, setMessageList ] = useState({
        room1: [],
        room2: [],
        room3: []
    });
    const [ messageText, setMessageText ] = useState("");
    const inputRef = useRef();
    const { roomId } = useParams();

    const classes = useStyles();
    
    const sendMessage = () => {
        if (messageText) {
            setMessageList({
                ...messageList,
                [roomId]: [
                    ...(messageList[roomId] ?? []),
                    {
                        author: "batman",
                        text: messageText,
                        dateTime: new Date().toLocaleString('ru')
                    }
                ]
            });

            setMessageText("");
            focusInput();
        }
    };

    const focusInput = () => {
        if (inputRef.current) inputRef.current.focus();
    };

    const handlePressInput = ({code}) => {
        if (code === "Enter") {
            sendMessage();
        }
    };

    useEffect(() => {
        const defaultAuthor = "ROBOT";
        let timerId = null;
        const messages = messageList[roomId] ?? [];
        const lastMessage = messages[messages.length - 1];

        if (!messages.length || lastMessage.author === defaultAuthor) return;

        timerId = setTimeout(() => {
            setMessageList({
                ...messageList,
                [roomId]: [
                    ...(messageList[roomId] ?? []),
                    {
                        author: defaultAuthor,
                        text: "OK!",
                        dateTime: new Date().toLocaleString('ru')
                    }
                ]
            });
        }, 1500);
    
        return () => {
          clearTimeout(timerId)
        };
      }, [messageList, roomId]);

    const messages = messageList[roomId] ?? [];

    return (
        <>
            <ul>
                {messages.map((item) => <li
                    className={classNames(styles.messageContainer, classes.list)}
                    key={item.dateTime}>
                        {Message(item)}
                </li>)}
            </ul>
            <Input
                className={styles.inputMessage}
                placeholder="Введите текст сообщения..."
                inputRef={inputRef}
                value={messageText}
                onChange={(event) => setMessageText(event.target.value)}
                onKeyPress={handlePressInput}
                autoFocus
                fullWidth
                endAdornment={
                    <InputAdornment position="end">
                        <Send className={styles.sendIcon} onClick={sendMessage} />
                    </InputAdornment>
                }
            />
        </>
    );
}