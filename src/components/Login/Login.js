import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { useHistory } from "react-router-dom";
import axios from "../../axios";

function Login() {
    const history = useHistory();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                const jsonData = {
                    pic: result.user.photoURL,
                    name: result.user.displayName,
                    email: result.user.email,
                };
                window.localStorage.setItem(
                    "myChatUser",
                    JSON.stringify(jsonData)
                );
                return jsonData;
            })
            .then((jsonData) => {
                axios.post("/user", jsonData);
            })
            .then(() => {
                const redirect = window.location.href.split("=")[1];
                redirect ? history.push(redirect) : history.push("/app");
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://www.flaticon.com/svg/static/icons/svg/1041/1041916.svg"
                    alt="my-chat logo"
                />
                <div className="login__text">
                    <h1>Sign in to My Chat</h1>
                </div>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    );
}

export default Login;
