import React from "react";
import "./Message.css";

function Message({ author, name, content, timestamp }) {
    return (
        <div className={`message ${author && "message__author"}`}>
            <div className="message__name">{name}</div>
            <div className="message__content">{content}</div>
            <div className="message__timestamp">{timestamp.toLocaleString()}</div>
        </div>
    );
}

export default Message;
