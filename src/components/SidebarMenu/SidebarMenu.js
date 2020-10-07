import React from "react";
import "./SidebarMenu.css";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import JoinRoom from "../Dialogs/JoinRoom";
import CreateRoom from "../Dialogs/CreateRoom";
import { useHistory } from "react-router-dom";

const options = [
    "Log Out",
    <JoinRoom />,
    <CreateRoom />
];

const ITEM_HEIGHT = 50;

function SidebarMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const history = useHistory();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handleMenuClose = (param) => {
        setAnchorEl(null);
        if(param === 'Log Out') {
            window.localStorage.removeItem('myChatUser');
            history.push('/login?redirect=/app');
        }
    }

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
                        key={"sidebarMenu"+i}
                        selected={option === ""}
                        onClick={() => handleMenuClose(option)}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default SidebarMenu;
