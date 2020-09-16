import React from 'react';
import './Home.css';
import { useHistory } from "react-router-dom";

function Home() {
    let history = useHistory();

    return (
        <div className='home'>
            <h1 className="home__heading">Welcome to My Chat</h1>
            <button className="home__button" onClick={() => {history.push('/app');}}>Open My Chat</button>
        </div>
    )
}

export default Home;
