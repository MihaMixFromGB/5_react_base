import { useState, useEffect, useRef, useCallback } from 'react';
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
const DEFAULT_USER = "BATMAN";
const BOT_NAME = "ROBOT";
const BOT_MESSAGE = "OK!";

const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight)
};

const focusInput = (inputRef) => {
    if (inputRef.current) inputRef.current.focus();
};

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
    
    const sendMessage = useCallback((text, author = DEFAULT_USER) => {
        if (text) {
            setMessageList({
                ...messageList,
                [roomId]: [
                    ...(messageList[roomId] ?? []),
                    {
                        author: author,
                        text: text,
                        dateTime: new Date().toLocaleString('ru')
                    }
                ]
            });

            setMessageText("");
        }
    }, [messageList, roomId]);

    const handlePressInput = ({code}) => {
        if (code === "Enter") {
            sendMessage(messageText);
        }
    };

    useEffect(() => {
        scrollToBottom();
        focusInput(inputRef);
    }, [messageList])

    useEffect(() => {
        let timerId = null;
        const messages = messageList[roomId] ?? [];
        const lastMessage = messages[messages.length - 1];

        if (!messages.length || lastMessage.author === BOT_NAME) return;

        timerId = setTimeout(() => {
            sendMessage(BOT_MESSAGE, BOT_NAME);
        }, 1500);
    
        return () => {
          clearTimeout(timerId)
        };
      }, [messageList, roomId, sendMessage]);

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
                        <Send className={styles.sendIcon}
                                onClick={() => sendMessage(messageText)} />
                    </InputAdornment>
                }
            />
        </>
    );
}