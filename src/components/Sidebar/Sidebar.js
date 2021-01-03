import { Avatar } from "@material-ui/core";
import React, { useEffect, useState, useCallback } from "react";
import "./Sidebar.css";
import { SearchOutlined } from "@material-ui/icons";
import SidebarRoom from "../SidebarRoom/SidebarRoom";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import axios from "../../axios";
import pusher from "../../pusher";
import Loading from "../Loading/Loading"
import CreateRoom from "../Dialogs/CreateRoom";
import { Button } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const roomUpdateChannel = pusher.subscribe("roomsUpdate");

function Sidebar() {
    const user = JSON.parse(window.localStorage.getItem("myChatUser"));
    const [rooms, setRooms] = useState([]);
    const [roomsStatus, setRoomsStatus] = useState("loading");

    const updateRooms = useCallback(() => {
        axios.get(`/roomList/${user.email}`).then((response) => {
            const roomsArray = response.data.sort((x, y) => {
                return new Date(y.lastTimestamp) - new Date(x.lastTimestamp);
            });
            if(roomsArray.length === 0) {
                setRoomsStatus("empty");
            } else if(roomsArray.length > 0) {
                setRoomsStatus("loaded");
                setRooms(roomsArray);
            }
        });
    }, []);

    useEffect(() => {
        roomUpdateChannel.bind("someUpdate", () => {
            updateRooms();
        });

        return () => {
            roomUpdateChannel.unbind_all();
        };
    }, [updateRooms]);

    useEffect(() => {
        updateRooms();
    }, [updateRooms]);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <SidebarMenu><Avatar src={user.pic} /></SidebarMenu>
                <div className="sidebar__headerInfo">
                    <h2>{user.name}</h2>
                    <h3>{user.email}</h3>
                </div>
                <div className="sidebar__menuButton">
                    <SidebarMenu>
                        <MoreVertIcon />
                    </SidebarMenu>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search your room" type="text" />
                </div>
            </div>
            <div className="sidebar__rooms">
                {
                    (() => {
                        if( roomsStatus === "loading" ) {
                            return <Loading />;
                        } else if( roomsStatus === "empty" ) {
                            return (
                            <div className="sidebar__createRoom">
                                    <Button><CreateRoom /></Button>
                            </div>);
                        } else {
                            return <>{rooms.map((room) => (
                                <SidebarRoom
                                    roomPic={room.pic}
                                    roomName={`${room.name.substring(0, 30)}${
                                        room.name.length > 30 ? "..." : ""
                                    }`}
                                    // lastMessage={`${room.lastMessage.substring(0, 32)}${
                                    //     room.lastMessage.length > 32 ? "..." : ""
                                    // }`}
                                    lastMessage={room.lastMessage}
                                    roomId={room._id}
                                    key={room._id}
                                />
                            ))}</>;
                        }
                    })()
                }
            </div>
        </div>
    );
}

export default Sidebar;
