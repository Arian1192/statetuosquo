import React from "react";
import { useRouter } from "next/router";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = React.useState({token: ""});
    const router = useRouter();

    const setUserAuthInfo = data => {
        setAuthUser({token : data });
        localStorage.setItem("token", data);
    }

    const isUserLoggedIn = () => {
        const token = localStorage.getItem("token");
        if(token) setAuthUser({token: token});
        else router.push("/login");
    }

    const clearUserAuthInfo = () => {
        setAuthUser({token: ""});
        localStorage.removeItem("token");
        router.push("/login");
    }

    const value ={
        authUser,
        setUserAuthInfo,
        isUserLoggedIn,
        clearUserAuthInfo
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
