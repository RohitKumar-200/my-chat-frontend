import React, { useEffect } from "react";
import "./joinRoom.css";
import axios from "../../axios";
import { useHistory } from "react-router-dom";

function JoinRoom() {
    const history = useHistory();

    useEffect(() => {
        if (!window.localStorage.getItem("myChatUser")) {
            history.push("/login?redirect=" + window.location.pathname);
        } else {
            const hrefArr = window.location.href.split("/");
            const roomId = hrefArr[hrefArr.length - 1];
            if (roomId) {
                axios
                    .post("/joinRoom", {
                        email: JSON.parse(
                            window.localStorage.getItem("myChatUser")
                        ).email,
                        roomId: roomId,
                    })
                    .then(() => {
                        history.push("/app");
                    })
                    .catch((err) => {
                        alert(err.response.data);
                    });
            }
        }
    }, [history]);

    return (
        <div className="joinRoom">
            <h1 className="joinRoom__heading">Processing</h1>
            <img
                src="https://cutewallpaper.org/21/loading-gif-transparent-background/HopeWell.gif"
                alt="processing"
                className="joinRoom__loadingImage"
            />
        </div>
    );
}

export default JoinRoom;
