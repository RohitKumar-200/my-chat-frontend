import React, {useContext} from "react";
import ChatRoom from "../ChatRoom/ChatRoom";
import Sidebar from "../Sidebar/Sidebar";
import "./AppContainer.css";
import { UserContext } from "../../context/UserContext";
import { useHistory } from "react-router-dom";


function AppContainer() {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();

    return (
        <>
            {user?(
                <div className="appContainer">
                    {console.log(user)}
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
