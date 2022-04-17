import styles from "./chat-layout.module.css";

export function ChatLayout({chats, messages}) {
    return (
        <div className={styles.content}>
            <div className={styles.chats}>{chats}</div>
            <div className={styles.messages}>{messages}</div>
        </div>
    );
}