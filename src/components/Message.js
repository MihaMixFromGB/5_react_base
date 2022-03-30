export function Message({author,text,dateTime}) {
    return (
      <div className="chat__list__message" data-author={author}>
        <p className="chat__list__message__author">{author}</p>
        <p className="chat__list__message__text">{text}</p>
        <p className="chat__list__message__dateTime">{dateTime}</p>
      </div>
    );
}