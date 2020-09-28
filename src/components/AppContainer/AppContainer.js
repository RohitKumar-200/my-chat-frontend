import React from "react";
import ChatRoom from "../ChatRoom/ChatRoom";
import Sidebar from "../Sidebar/Sidebar";
import "./AppContainer.css";
import { useHistory } from "react-router-dom";


function AppContainer() {
  const history = useHistory();

    return (
        <>
            {window.localStorage.getItem('myChatUser')?(
                <div className="appContainer">
                    {/* {console.log(window.localStorage.getItem('myChatUser'))} */}
                    <Sidebar />
                    <ChatRoom />
                </div>
            ):(
                history.push('/login')
            )}
        </>
    );
}

export default AppContainer;
