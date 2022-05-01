import { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';
import { Message } from "./message";
// import { messagesSelector, addMessage } from "../../store/messages";
import { messagesSelector, addMessageFb, getMessagesFb } from "../../store/messages";
import { profileSelector } from "../../store/profile";

import styles from "./message-list.module.css";

const useStyles = makeStyles((theme) => ({
    list: {
        backgroundColor: theme.palette.customGrey.main
    }
}));

const BOT_NAME = "BOT";
const BOT_MESSAGE = "Hello from useEffect!";

const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight)
};

const focusInput = (inputRef) => {
    if (inputRef.current) inputRef.current.focus();
};

export function MessageList() {
    const { roomId } = useParams();
    const messages = useSelector(messagesSelector(roomId));
    const { firstName, lastName, nickname } = useSelector(profileSelector);
    const REGISTERED_USER = nickname || `${firstName} ${lastName}`;
    const [ messageText, setMessageText ] = useState("");
    const inputRef = useRef();
    const dispatch = useDispatch();

    const classes = useStyles();
    
    const sendMessage = useCallback((text, author = REGISTERED_USER) => {
        if (text) {
            // dispatch(addMessage(roomId, {author, text}));
            dispatch(addMessageFb(roomId, {author, text}));
            setMessageText("");
        }
    }, [dispatch, roomId, REGISTERED_USER]);

    const handlePressInput = ({code}) => {
        if (code === "Enter") {
            sendMessage(messageText);
        }
    };

    useEffect(() => {
        dispatch(getMessagesFb(roomId));
    }, [dispatch, roomId]);

    useEffect(() => {
        scrollToBottom();
        focusInput(inputRef);
    }, [messages])

    useEffect(() => {
        let timerId = null;
        const lastMessage = messages[messages.length - 1];

        if (!messages.length || lastMessage.author === BOT_NAME) return;

        timerId = setTimeout(() => {
            sendMessage(BOT_MESSAGE, BOT_NAME);
        }, 500);
    
        return () => {
          clearTimeout(timerId)
        };
      }, [roomId, messages, sendMessage]);

    return (
        <>
            <ul className={styles.messagesList}>
                {messages.map((item, index) => <li
                    className={classNames(styles.messageContainer, classes.list)}
                    key={index}>
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