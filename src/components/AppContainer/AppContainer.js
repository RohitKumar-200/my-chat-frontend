import React from "react";
import ChatRoom from "../ChatRoom/ChatRoom";
import Sidebar from "../Sidebar/Sidebar";
import "./AppContainer.css";

function AppContainer() {
    return (
        <div className="appContainer">
            <Sidebar />
            <ChatRoom />
        </div>
    );
}

export default AppContainer;
