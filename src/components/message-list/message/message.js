import styles from "./message.module.css";

export function Message({author,text,dateTime}) {
    return (
      <div className={styles.message} data-author={author}>
        <p className={styles.message__author}>{author}</p>
        <p className={styles.message__text}>{text}</p>
        <p className={styles.message__dateTime}>{dateTime}</p>
      </div>
    );
}