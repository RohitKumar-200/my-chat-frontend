import React, { useEffect, useState, useContext } from "react";
import "./ChatRoom.css";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import Message from "../Message/Message";
import ChatRoomMenu from "../ChatRoomMenu/ChatRoomMenu";
import Pusher from "pusher-js";
import axios from "../../axios";
import { CurrentRoomContext } from "../../context/currentRoomContext";

function ChatRoom() {
    const [currentRoomId, setCurrentRoomId] = useContext(CurrentRoomContext);

    const userName = JSON.parse(window.localStorage.getItem("myChatUser"))[
        "name"
    ];
    const userEmail = JSON.parse(window.localStorage.getItem("myChatUser"))[
        "email"
    ];

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [roomInfo, setRoomInfo] = useState("");

    const scrollDown = () => {
        const element = document.getElementById("ChatRoom");
        if (element)
            element.scrollTop = element.scrollHeight - element.clientHeight;
    };

    useEffect(() => {
        if (currentRoomId) {
            axios.get(`/roomInfo/${currentRoomId}`).then((response) => {
                setRoomInfo(response.data);
            });
        }
    }, [currentRoomId]);

    useEffect(() => {
        if (currentRoomId) {
            axios.get(`/roomMessages/${currentRoomId}`).then((response) => {
                setMessages(response.data);
                scrollDown();
            });
        }
    }, [currentRoomId]);

    useEffect(() => {
        const pusher = new Pusher("f6b1c526fc24e4978d34", {
            cluster: "eu",
        });

        const channel = pusher.subscribe("newMessage");
        channel.bind(currentRoomId, (newMessage) => {
            setMessages([...messages, newMessage]);
            scrollDown();
        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, [messages, currentRoomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        if (input !== "") {
            const requestBody = {
                text: input,
                authorName: userName,
                authorEmail: userEmail,
                roomId: currentRoomId,
            };
            axios.post("/newMessage", requestBody);
            setInput("");
        }
    };

    if (!currentRoomId) {
        return (
            <div className="emptyChatRoom">
                <div className="emptyChatRoomContainer">
                <div className="emptyChatRoom__imageContainer">
                    <img
                        src="https://www.flaticon.com/svg/static/icons/svg/1041/1041916.svg"
                        alt="my-chat logo"
                    />
                </div>
                <p className="emptyChatRoom__text">Welcome to My Chat</p>
                </div>
            </div>
        );
    }

    return (
        <div className="chatRoom">
            <div className="chatRoom__header">
                <div className="chatRoom__headerLeft">
                    <Avatar src={roomInfo.pic} />
                    <div className="chatRoom__headerInfo">
                        <h2>{roomInfo.name}</h2>
                        <h3>{roomInfo.description}</h3>
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
                {messages.map((message) => (
                    <Message
                        key={message._id}
                        author={message.authorEmail === userEmail}
                        name={message.authorName}
                        content={message.text}
                        timestamp={new Date(message.timestamp)}
                    />
                ))}
                {/* <Message
                    author={true}
                    name="Sample Name"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    timestamp={new Date()}
                /> */}
            </div>
            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <form>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message"
                    />
                    <button type="submit" onClick={sendMessage}>
                        Send a message
                    </button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default ChatRoom;
