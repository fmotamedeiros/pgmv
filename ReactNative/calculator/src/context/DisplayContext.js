import React, { useContext, useState } from "react";

const DisplayContext = React.createContext();

const DisplayContextProvider = ({ children }) => {
    const [displayText, setDisplayText] = useState('0');
    return (
        <DisplayContext.Provider value={{ displayText: displayText, setDisplayText: setDisplayText }}>
            {children}
        </DisplayContext.Provider>
    );
};

const useDisplayContext = () => {
    const displayContext = useContext(DisplayContext);
    return displayContext;
}

export { DisplayContextProvider, useDisplayContext };