import React, { useContext, useState } from "react";
import "./ChatRoomMenu.css";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddParticipant from "../Dialogs/AddParticipant";
import { CurrentRoomContext } from "../../context/currentRoomContext";
import axios from "../../axios";

const options = [
    "Leave room",
    "Clear chat",
    <AddParticipant />,
    "Invitation link",
    "Invitation code",
];

const ITEM_HEIGHT = 52;

function ChatRoomMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentRoomId, setCurrentRoomId] = useContext(CurrentRoomContext);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProceed = (param) => {
        switch (param) {
            case "Leave room":
                axios
                    .post("/leaveRoom", {
                        roomId: currentRoomId,
                        email: JSON.parse(
                            window.localStorage.getItem("myChatUser")
                        ).email,
                    })
                    .then(() => {
                        setCurrentRoomId(null);
                    })
                    .catch((err) => {
                        alert(err.response.data);
                    });
                break;
            case "Clear chat":
                axios
                    .delete(`/clearChat/${currentRoomId}`)
                    .then(() => {
                        const roomId = currentRoomId;
                        setCurrentRoomId(null);
                        setCurrentRoomId(roomId);
                    })
                    .catch((err) => {
                        alert(err.response.data);
                    });
                break;
            case "Invitation link":
                alert("This feature is not available yet, copy invitation code instead!");
                break;
            case "Invitation code":
                navigator.clipboard.writeText(currentRoomId);
                alert("Invitation code copied to clipboard");
                break;
            default: break;
        }
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                aria-controls="sidebar-long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="sidebar-long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                    },
                }}
            >
                {options.map((option, i) => (
                    <MenuItem
                        key={"chatRoomMenu" + i}
                        selected={option === ""}
                        onClick={() => handleProceed(option)}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default ChatRoomMenu;
