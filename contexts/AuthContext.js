import React from "react";
import { useRouter } from "next/router";
import { decodeJWT } from "../utils/decodeJWT";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = React.useState({token: ""});
    const [userInfo, setUserInfo] = React.useState({});
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

    const getUserInfo = () => {
        const token = localStorage.getItem("token");
        if(token) {
            const decodedToken = decodeJWT(token);
            setUserInfo(decodedToken);
        }else{
            router.push("/login");
        }
    }

    const clearUserAuthInfo = () => {
        setAuthUser({token: ""});
        localStorage.removeItem("token");
        router.push("/login");
    }
    
    const getRrss = async () => {
        const token = localStorage.getItem("token");
        if(token) {
            const decodedToken = decodeJWT(token);
            const id = decodedToken.id;
            const response = await fetch(`/api/user/${id}/getrrss`, {

            })
            const data = await response.json();
            return data;
        }else{
            router.push("/login");
        }
    }


    const value ={
        authUser,
        setUserAuthInfo,
        isUserLoggedIn,
        clearUserAuthInfo,
        userInfo,
        getUserInfo,
        setUserInfo,
        getRrss
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
