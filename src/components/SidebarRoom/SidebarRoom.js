import { Avatar } from "@material-ui/core";
import React, { useContext } from "react";
import "./SidebarRoom.css";
import { CurrentRoomContext } from "../../context/currentRoomContext";

function SidebarRoom({ roomId, roomPic, roomName, lastMessage }) {
    const [, setCurrentRoomId] = useContext(CurrentRoomContext);

    return (
        <div
            className="sidebarRoom"
            onClick={() => {
                setCurrentRoomId(roomId);
            }}
        >
            <div className="sidebarRoom__container">
                <Avatar src={roomPic} />
                <div className="sidebarRoom__info">
                    <p className="sidebarRoom__title">{roomName}</p>
                    <p className="sidebarRoom__lastMessage">{lastMessage}</p>
                </div>
            </div>
            <hr className="sidebarRoom__hr" />
        </div>
    );
}

export default SidebarRoom;
