import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { SearchOutlined } from "@material-ui/icons";
import SidebarRoom from "../SidebarRoom/SidebarRoom";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import axios from "../../axios";
import Pusher from "pusher-js";

function Sidebar() {
    const [rooms, setRooms] = useState([]);

    const user = JSON.parse(window.localStorage.getItem("myChatUser"));

    const array_move = (arr, old_index, new_index) => {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr;
    };

    useEffect(() => {
        const pusher = new Pusher("f6b1c526fc24e4978d34", {
            cluster: "eu",
        });

        const channel = pusher.subscribe("lastMessageUpdate");
        channel.bind(
            "roomId",
            (roomId) => {
                const newRooms = array_move(
                    rooms,
                    rooms.findIndex((e) => e._id === roomId),
                    0
                );
                setRooms(newRooms);
                setRooms([...rooms]); //to re-render component, other solution is to change key
            },
            [rooms]
        );

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    });

    useEffect(() => {
        axios.get(`/roomList/${user.email}`).then((response) => {
            const roomsArray = response.data.sort((x, y) => {
                return new Date(y.lastTimestamp) - new Date(x.lastTimestamp);
            });
            setRooms(roomsArray);
        });
    }, []);

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
                {rooms.map((room) => (
                    <SidebarRoom
                        roomPic={room.pic}
                        roomName={`${room.name.substring(0, 42)}${
                            room.lastMessage.length > 47 ? "..." : ""
                        }`}
                        lastMessage={`${room.lastMessage.substring(0, 47)}${
                            room.lastMessage.length > 47 ? "..." : ""
                        }`}
                        roomId={room._id}
                        key={room._id}
                    />
                ))}
                {/* <SidebarRoom roomPic="https://avatars.dicebear.com/api/human/a.svg" roomName="Geeks for Game" lastMessage="Hahaha you are funny" />
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
                <SidebarRoom roomName="Geeks for Game" lastMessage="Hahaha you are funny" /> */}
            </div>
        </div>
    );
}

export default Sidebar;
