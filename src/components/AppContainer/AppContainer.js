import React from "react";
import ChatRoom from "../ChatRoom/ChatRoom";
import Sidebar from "../Sidebar/Sidebar";
import "./AppContainer.css";
import { useHistory } from "react-router-dom";
import { CurrentRoomProvider } from "../../context/currentRoomContext";

function AppContainer() {
    const history = useHistory();

    return (
        <CurrentRoomProvider>
            <>
                {window.localStorage.getItem("myChatUser") ? (
                    <div className="appContainer">
                        <Sidebar />
                        <ChatRoom />
                    </div>
                ) : (
                    history.push("/login?redirect=/app")
                )}
            </>
        </CurrentRoomProvider>
    );
}

export default AppContainer;
