import React from "react";
import "./Message.css";

function Message({ author, name, content, timestamp }) {
    return (
        <p className={`message ${author && "message__author"}`}>
            <div className="message__name">{name}</div>
            <div className="message__content">{content}</div>
            <div className="message__timestamp">{timestamp.toUTCString()}</div>
        </p>
    );
}

export default Message;
