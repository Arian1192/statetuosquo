
import { AuthContext } from "../contexts/AuthContext"
import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { useRouter } from "next/router"
import { BsInstagram, BsTwitch, BsTwitter } from 'react-icons/bs'
import { useFetch } from "../utils/hooks/useFetch"
import jwt_decode from "jwt-decode"

const DashboardUser = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [userNameAvatar, setUserNameAvatar] = useState("")
    const authContext = useContext(AuthContext)

    const Logout = () => {
        authContext.clearUserAuthInfo()
    }
    useEffect(() =>{
        const token = localStorage.getItem('token')
        try{
            if(token){
                const decoded = jwt_decode(token)
                setUserNameAvatar(decoded)
            }
        }catch(e){
            console.log(e)
        }
    },[])
    
    // console.log(authContext.userAuthInfo.username)
    // // mocking data from API
    // const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users/1", "GET")
    
    // console.log(data)
    
    return (
        <div className="flex">
            <div className={`h-screen ${isOpen ? "w-64" : "w-20"} duration-200  border border-zinc-400  dark:border-t-emerald-400 dark:border-r-emerald-400  border-l-0  text-black dark:text-white relative`}>
                {userNameAvatar && <h2 className={`${!isOpen && 'scale-0'} duration-300 text-lg font-semibold text-center text-zinc-700 dark:text-zinc-200 mt-7`}>{userNameAvatar && userNameAvatar.username}</h2>}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`absolute w-10 h-8 border-2 rounded cursor-pointer -right-3 top-8 w-7 border-emerald-300 bg-slate-500 text-purple-200 hover:text-fuchsia-400 hover:border-green-400 ${!isOpen ? 'rotate-180' : 'rotate-0'} duration-500`} onClick={() => setIsOpen(!isOpen)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                {/* List items */}
                <div className="flex flex-col mt-10">
                    <div className="flex items-center justify-center ">
                        <ul className="flex flex-col w-full gap-5 pl-4 text-base text-zinc-800 dark:text-white">
                            <li className="flex mb-5">
                                {isOpen && <span className="ml-3">Twitter</span>}
                                <BsTwitter className="mt-[0.5px] ml-4 text-lg cursor-pointer hover:text-sky-500 hover:animate-wave" />
                            </li>
                            <li className="flex mb-5">
                                {isOpen && <span className="ml-3">Instagram</span>}
                                <div className="flex items-center justify-start p-1 ml-[1vw] rounded-lg cursor-pointer hover:bg-gradient-to-br from-purple-700 via-red-600 to-yellow-500 hover:text-white hover:animate-wave ">
                                    <BsInstagram className="inline-block text-sm" />
                                </div>
                            </li>
                            <li className="flex mb-5">
                                {isOpen && <span className="ml-3">Twitch</span>}
                                <BsTwitch className="mt-1 ml-[1vw] text-base cursor-pointer hover:text-fuchsia-800 hover:animate-wave" />
                            </li>
                        </ul>
                    </div>
                </div>
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
            </div>
            <div className="flex-1 h-screen text-2xl font-semibold p-7 text-zinc-700 ">
                {userNameAvatar && `Main Home Page of ${userNameAvatar.username}`}
                {/* {loading && <h2 className="text-lg font-semibold text-center text-zinc-700 mt-7">Loading...</h2>} */}
            </div>
        </div>
    )
}

export default DashboardUser