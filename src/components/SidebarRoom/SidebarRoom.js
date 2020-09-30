import { Avatar } from "@material-ui/core";
import React, { useState, useEffect, useContext } from "react";
import "./SidebarRoom.css";
import Pusher from "pusher-js";
import { CurrentRoomContext } from "../../context/currentRoomContext";

function SidebarRoom(props) {
    const [currentRoomId, setCurrentRoomId] = useContext(CurrentRoomContext);
    const [lastMessage, setLastMessage] = useState(props.lastMessage);

    useEffect(() => {
        const pusher = new Pusher("f6b1c526fc24e4978d34", {
            cluster: "eu",
        });

        const channel = pusher.subscribe("lastMessageUpdate");
        channel.bind(props.roomId, (newMessage) => {
            setLastMessage(newMessage);
        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, [props.roomId]);

    return (
        <div
            className="sidebarRoom"
            onClick={() => {
                setCurrentRoomId(props.roomId);
            }}
        >
            <div className="sidebarRoom__container">
                <Avatar src={props.roomPic} />
                <div className="sidebarRoom__info">
                    <p className="sidebarRoom__title">{props.roomName}</p>
                    <p className="sidebarRoom__lastMessage">{lastMessage}</p>
                </div>
            </div>
            <hr className="sidebarRoom__hr" />
        </div>
    );
}

export default SidebarRoom;
