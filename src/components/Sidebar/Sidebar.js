import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import { SearchOutlined } from "@material-ui/icons";
import SidebarRoom from "../SidebarRoom/SidebarRoom";
import SidebarMenu from "../SidebarMenu/SidebarMenu";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerInfo">
                    <h2>Rohit Kumar</h2>
                    <h3>email@example.com</h3>
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
