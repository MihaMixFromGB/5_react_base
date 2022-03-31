import styles from "./header.module.css";

export function Header() {
    return (
        <div className={styles.header}>
          <h1>ReactJS. Базовый курс</h1>
          <hr/>
        </div>
      );
}