export function Message({text}) {
    return (
      <div className="message">
        <p className="dateTime">{new Date().toLocaleString('ru')}</p>
        <p>{text}</p>
      </div>
    );
}