import React from "react";

export const RrssContext = React.createContext();
export const RrssProvider = ({ children }) => {
    const [rrss, setRrss] = React.useState([]);

    const getRrss = async () => {
        const response = await fetch("http://localhost:3000/api/rrss");
        const data = await response.json();
        setRrss(data);
    }

    const value = {
        rrss,
        getRrss
    }

    return (
        <RrssContext.Provider value={value}>
            {children}
        </RrssContext.Provider>
    )
}