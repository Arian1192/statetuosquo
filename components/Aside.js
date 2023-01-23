import { ThemeChanger } from "./ThemeChanger"
import { AuthContext } from "../contexts/AuthContext"
import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { useRouter } from "next/router"
import { BsInstagram, BsTwitch, BsTwitter } from 'react-icons/bs'
import { VscLoading } from 'react-icons/vsc'
import { useFetch } from "../utils/hooks/useFetch"
import jwt_decode from "jwt-decode"
import apiWrapper from "../utils/apiWrapper"

const Aside = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [userNameAvatar, setUserNameAvatar] = useState("")
    const [rrss, setRrss] = useState({})
    const authContext = useContext(AuthContext)

    const Logout = () => {
        authContext.clearUserAuthInfo()
    }
    useEffect(() => {
        const token = localStorage.getItem('token')
        try {
            if (token) {
                authContext.getRrss().then(data => {
                    setRrss(data)
                })
                const decoded = jwt_decode(token)
                setUserNameAvatar(decoded)
            }
        } catch (e) {
            console.log(e)
        }
    }, [authContext])

    return (
        <div className={`h-screen ${isOpen ? "w-64" : "w-20"} duration-100  border border-zinc-400  dark:border-r-emerald-400  border-l-0 border-t-0 border-b-0 text-black dark:text-white relative`}>
            {userNameAvatar && <h2 className={`${!isOpen && 'scale-0'} duration-300 text-lg font-semibold text-center text-zinc-700 dark:text-zinc-200 mt-7 `}>{userNameAvatar && userNameAvatar.username}</h2>
            }
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`absolute w-10 h-8 border rounded cursor-pointer -right-3 top-7 w-7 dark:border-emerald-300 bg-slate-500 text-purple-200 hover:text-fuchsia-400 hover:border-green-400 ${!isOpen ? 'rotate-180' : 'rotate-0'} duration-500`} onClick={() => setIsOpen(!isOpen)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            {/* List items */}
            <ul className={`flex flex-col mt-10 justify-center w-full gap-5 text-base text-zinc-800 dark:text-white ${isOpen ? "items-start" : "items-center"} `}>
                <li className="flex mb-5">
                    {isOpen ? (
                        <div className="flex gap-2">
                            <span className="ml-4">Twitter</span>
                            <BsTwitter className="text-lg cursor-pointer hover:text-sky-500 hover:animate-wave" />
                            {rrss && <p>{`@${rrss.instagramName}`}</p>}
                        </div>)
                        : <BsTwitter className="text-lg cursor-pointer hover:text-sky-500 hover:animate-wave" />}
                </li>
                <li className="flex mb-5">
                    {isOpen ? (
                        <div className="flex gap-2">
                            <span className="ml-4">Instagram</span>
                            <div className="flex items-center justify-start p-1 rounded-lg cursor-pointer hover:bg-gradient-to-br from-purple-700 via-red-600 to-yellow-500 hover:text-white hover:animate-wave ">
                                <BsInstagram className="inline-block text-sm" />
                            </div>
                            {rrss && <p>{`/${rrss.instagramName}`}</p>}
                        </div>
                    )
                        : (<div className="flex items-center justify-start p-1 rounded-lg cursor-pointer hover:bg-gradient-to-br from-purple-700 via-red-600 to-yellow-500 hover:text-white hover:animate-wave ">
                            <BsInstagram className="inline-block text-sm" />

                        </div>
                        )}
                </li>
                <li className="mb-5">
                    {isOpen ? (
                        <div className="flex gap-2">
                            <span className="ml-4">Twitch</span>
                            <BsTwitch className="mt-1 text-base cursor-pointer hover:text-fuchsia-800 hover:animate-wave" />
                            {rrss && <p>{`/${rrss.twitchName}`}</p>}
                        </div>
                    )
                        : <BsTwitch className="mt-1 text-base cursor-pointer hover:text-fuchsia-800 hover:animate-wave" />}
                </li>
            </ul>
            <div className="flex justify-center mt-5">
                <button onClick={() => Logout()} className={`${!isOpen ? 'px-3' : 'px-8'} text-white duration-300 py-2 border-zinc-500 shadow-lg hover:shadow-2xl font-semibold bg-purple-400 rounded hover:bg-purple-800 w-fit boder`}>
                    {isOpen ? <span className="flex gap-3">Logout<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg></span> : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    )}
                </button>

            </div>
            {isOpen ? (
                <div className="flex flex-col items-start mt-10 ml-4 mjustify-center">
                    <ThemeChanger />
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center mt-[2.5rem] mr-2">
                    <ThemeChanger />
                </div>

            )}
        </div>
    )
}

export default Aside