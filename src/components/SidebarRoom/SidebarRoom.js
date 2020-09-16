import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarRoom.css";

function SidebarRoom({roomPic, roomName, lastMessage}) {
    return (
        <div className="sidebarRoom">
            <div className="sidebarRoom__container">
                <Avatar src={roomPic} />
                <div className="sidebarRoom__info">
                    <p className="sidebarRoom__title">{roomName}</p>
                    <p className="sidebarRoom__lastMessage">
                        {lastMessage}
                    </p>
                </div>
            </div>
            <hr className="sidebarRoom__hr" />
        </div>
    );
}

export default SidebarRoom;
