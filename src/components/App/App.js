import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppContainer from "../AppContainer/AppContainer";
import Home from "../Home/Home";
import Login from "../Login/Login";
import JoinRoom from "../JoinRoom/JoinRoom";

function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/app">
                        <AppContainer />
                    </Route>
                    <Route path="/joinRoom">
                        <JoinRoom />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
