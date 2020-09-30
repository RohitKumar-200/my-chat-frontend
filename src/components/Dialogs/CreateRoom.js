import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "../../axios";

export default function CreateRoom() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleProceed = () => {
        const name = document.getElementById("CreateRoom--name").value;
        const description = document.getElementById("CreateRoom--description")
            .value;
        const pic = document.getElementById("CreateRoom--pic").value;
        const requestData = {
            name: name,
            description: description,
            pic: pic,
            userEmail: JSON.parse(window.localStorage.getItem("myChatUser"))
                .email,
        };
        axios.post("/newRoom", requestData).then((response) => {});
        setOpen(false);
    };

    return (
        <div className="mainDiv">
            <span variant="outlined" color="primary" onClick={handleClickOpen}>
                Create new room
            </span>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Create Room</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter details to create a new room
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="CreateRoom--name"
                        label="Room Name"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="CreateRoom--description"
                        label="Description"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="CreateRoom--pic"
                        label="Image Url"
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
