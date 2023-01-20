import { AuthContext } from "../contexts/AuthContext"
import { useContext, useEffect, useLayoutEffect } from 'react'
import { useRouter } from "next/router"
const { useState } = require("react")

const DashboardUser = () => {
    const [isOpen, setIsOpen] = useState(true)
    const authContext = useContext(AuthContext)

    const Logout = () => {
        authContext.clearUserAuthInfo()
    }

    return (
        <div className="flex ">
            <div className={`h-screen ${isOpen ? "w-72" : "w-20"} duration-300 bg-zinc-500 border-zinc-200 border-2 dark:bg-slate-600 dark:border-gray-600  text-black relative`}>
                <h2 className={`${!isOpen && 'scale-0'} duration-300 text-2xl font-semibold text-center text-zinc-700  dark:text-white mt-7`}>Dashboard</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`absolute w-8 h-8 border-2 rounded cursor-pointer -right-3 top-8 w-7 border-emerald-300 bg-slate-500 text-purple-200 hover:text-fuchsia-400 hover:border-green-400 ${!isOpen ? 'rotate-180' : 'rotate-0'} duration-500`} onClick={() => setIsOpen(!isOpen)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                <div className="flex justify-center mt-5">
                    <button onClick={() => Logout()} className={`${!isOpen ? 'px-3' : 'px-8'} duration-300 py-2 border-2 border-zinc-500 shadow-lg hover:shadow-2xl font-semibold bg-purple-400 rounded dark:text-white  hover:border-emerald-500 w-fit boder`}>
                        {isOpen ? 'Logout' : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                        )}
                    </button>
                </div>
            </div>
            <div className="flex-1 h-screen text-2xl font-semibold p-7 text-zinc-700 ">
                Main Home Page
            </div>
        </div>
    )
}

export default DashboardUser