import { useState, useEffect, useRef } from 'react';
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

export function MessageList({messageList}) {
    const [ messages, setMessages ] = useState([]);
    const [ messageText, setMessageText ] = useState("");
    const inputRef = useRef();

    const classes = useStyles();
    
    const sendMessage = () => {
        if (messageText) {
            setMessages([
                ...messages,
                {
                    author: "batman",
                    text: messageText,
                    dateTime: new Date().toLocaleString('ru')
                }
            ]);

            setMessageText("");
            focusInput();
        }
    };

    const focusInput = () => {
        if (inputRef.current) inputRef.current.focus();
    }

    const handlePressInput = ({code}) => {
        if (code === "Enter") {
            sendMessage();
        }
    };

    useEffect(() => {
        const defaultAuthor = "ROBOT";
        let timerId = null;
        const lastMessage = messages[messages.length - 1];

        if (!messages.length || lastMessage.author === defaultAuthor) return;

        timerId = setTimeout(() => {
            setMessages([
                ...messages,
                {
                    author: defaultAuthor,
                    text: "OK!",
                    dateTime: new Date().toLocaleString('ru')
                }
            ]);
        }, 1500);
    
        return () => {
          clearTimeout(timerId)
        };
      }, [messages]);

    

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