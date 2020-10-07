import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./style.css";
import { CurrentRoomContext } from "../../context/currentRoomContext";
import axios from "../../axios";

export default function AddParticipant() {
    const [open, setOpen] = useState(false);
    const [currentRoomId] = useContext(CurrentRoomContext);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleProceed = () => {
        const email = document.getElementById("addParticipant--email").value;
        axios
            .post("/addParticipant", {
                email: email,
                roomId: currentRoomId,
            })
            .catch((err) => {
                alert(err.response.data);
            });
        setOpen(false);
    };

    return (
        <div className="mainDiv">
            <div variant="outlined" color="primary" onClick={handleClickOpen}>
                Add Participant
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Add Participant
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter email address of participant
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="addParticipant--email"
                        label="Email address"
                        type="email"
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
