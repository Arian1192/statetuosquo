import React, { useState, useEffect, useContext } from 'react'
import { ThemeChanger } from './ThemeChanger'
import { useTheme } from 'next-themes'
import { AuthContext } from '../contexts/AuthContext'
import jwt_decode from 'jwt-decode'


const Navbar = () => {
    const [previousTheme, setPreviousTheme] = useState('dark')
    const { theme } = useTheme()

    // const [state, setState] = useContext(AuthContext)
    // useEffect(() => {
    //     const token = window.localStorage.getItem('token')
    //     if (token) {
    //         const decoded = jwt_decode(token)
    //         setState({ ...state, username: decoded.username, email: decoded.email, id: decoded.id })
    //     } else {
    //         setState({ ...state, username: "", email: "", id: "" })
    //     }
    // }, [])

    return (
        <div className='flex flex-row items-center justify-between w-full'>
            {/* {state.username === undefined ? <span className='ml-4 text-xs max-sm:invisible max-sm:mr-0'>{'Te echamos de menos'}</span> : <span className='ml-4 text-xs max-sm:invisible max-sm:mr-0'>{`Hello, ${state.username}!`}</span>} */}
            <div className='flex flex-row items-center justify-center p-2 mr-20 max-sm:w-full max-sm:mr-0 max-sm:justify-between'>
                <span className='mr-2 text-xs max-sm:invisible max-sm:mr-0'>{`SWITCH TO  ${previousTheme.toUpperCase()} THEME  👉 `}</span>
                <ThemeChanger />
            </div>

        </div>
    )
}

export default Navbar