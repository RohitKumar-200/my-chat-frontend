import React, { useEffect } from "react";
import "./ChatRoom.css";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import Message from "../Message/Message";
import ChatRoomMenu from "../ChatRoomMenu/ChatRoomMenu";

function ChatRoom() {
    useEffect(() => {
        const element = document.getElementById("ChatRoom");
        if (element)
            element.scrollTop = element.scrollHeight - element.clientHeight;
    }, []);
    return (
        <div className="chatRoom">
            <div className="chatRoom__header">
                <div className="chatRoom__headerLeft">
                    <Avatar />
                    <div className="chatRoom__headerInfo">
                        <h2>Room Name</h2>
                        <h3>Room description</h3>
                    </div>
                </div>
                <div className="chatRoom__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <ChatRoomMenu />
                </div>
            </div>
            <div id="ChatRoom" className="chatRoom__body">
                <Message
                    author={true}
                    name="Sample Name"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    timestamp={new Date()}
                />
                <Message
                    author={false}
                    name="Sample Name"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    timestamp={new Date()}
                />
                <Message
                    author={false}
                    name="Sample Name"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    timestamp={new Date()}
                />
                <Message
                    author={false}
                    name="Sample Name"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    timestamp={new Date()}
                />
                <Message
                    author={false}
                    name="Sample Name"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    timestamp={new Date()}
                />
                <Message
                    author={false}
                    name="Sample Name"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    timestamp={new Date()}
                />
                <Message
                    author={true}
                    name="Sample Name"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    timestamp={new Date()}
                />
            </div>
            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <form>
                    <input type="text" placeholder="Type a message" />
                    <button type="submit">Send a message</button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default ChatRoom;
