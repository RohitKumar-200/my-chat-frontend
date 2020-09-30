import React, { createContext, useState } from "react";

export const CurrentRoomContext = createContext();

export const CurrentRoomProvider = (props) => {
    const [currentRoomId, setCurrentRoomId] = useState(null);

    return (
        <CurrentRoomContext.Provider value={[currentRoomId, setCurrentRoomId]}>
            {props.children}
        </CurrentRoomContext.Provider>
    );
};
