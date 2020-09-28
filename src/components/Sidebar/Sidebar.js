import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import { SearchOutlined } from "@material-ui/icons";
import SidebarRoom from "../SidebarRoom/SidebarRoom";
import SidebarMenu from "../SidebarMenu/SidebarMenu";

function Sidebar() {
    const user = JSON.parse(window.localStorage.getItem('myChatUser'));

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user.pic} />
                <div className="sidebar__headerInfo">
                    <h2>{user.name}</h2>
                    <h3>{user.email}</h3>
                </div>
                <SidebarMenu />
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search your room" type="text" />
                </div>
            </div>
            <div className="sidebar__rooms">
                <SidebarRoom roomPic="https://avatars.dicebear.com/api/human/a.svg" roomName="Geeks for Game" lastMessage="Hahaha you are funny" />
                <SidebarRoom roomName="Geeks for Game" lastMessage="Hahaha you are funny" />
                <SidebarRoom roomName="Geeks for Game" lastMessage="Hahaha you are funny" />
                <SidebarRoom roomName="Geeks for Game" lastMessage="Hahaha you are funny" />
                <SidebarRoom roomName="Geeks for Game" lastMessage="Hahaha you are funny" />
                <SidebarRoom roomName="Geeks for Game" lastMessage="Hahaha you are funny" />
                <SidebarRoom roomName="Geeks for Game" lastMessage="Hahaha you are funny" />
                <SidebarRoom roomName="Geeks for Game" lastMessage="Hahaha you are funny" />
                <SidebarRoom roomName="Geeks for Game" lastMessage="Hahaha you are funny" />
                <SidebarRoom roomName="Geeks for Game" lastMessage="Hahaha you are funny" />
                <SidebarRoom roomName="Geeks for Game" lastMessage="Hahaha you are funny" />
                <SidebarRoom roomName="Geeks for Game" lastMessage="Hahaha you are funny" />
                <SidebarRoom roomName="Geeks for Game" lastMessage="Hahaha you are funny" />
                <SidebarRoom roomName="Geeks for Game" lastMessage="Hahaha you are funny" />
                <SidebarRoom roomName="Geeks for Game" lastMessage="Hahaha you are funny" />
            </div>
        </div>
    );
}

export default Sidebar;
