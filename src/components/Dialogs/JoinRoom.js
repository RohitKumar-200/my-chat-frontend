import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./style.css";
import axios from "../../axios";

export default function JoinRoom() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleProceed = () => {
        const roomId = document.getElementById("JoinRoom--invitationCode")
            .value;
        axios
            .post("/joinRoom", {
                email: JSON.parse(window.localStorage.getItem("myChatUser"))
                    .email,
                roomId: roomId,
            })
            .catch((err) => {
                alert(err.response.data);
            });
        setOpen(false);
    };

    return (
        <div className="mainDiv">
            <div variant="outlined" color="primary" onClick={handleClickOpen}>
                Join Room
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Join Room</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter invitation code to join Room
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="JoinRoom--invitationCode"
                        label="Invitation code"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleProceed} color="primary">
                        Proceed
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
