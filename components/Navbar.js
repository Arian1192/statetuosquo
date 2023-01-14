import React, {useState, useEffect, use} from 'react'
import { ThemeChanger } from './ThemeChanger'
import { useTheme } from 'next-themes'

const Navbar = () => {
    const [previousTheme, setPreviousTheme] = useState('dark')
    const { theme } = useTheme()

    useEffect(() => {
        if (theme === 'dark') setPreviousTheme('light')
        else setPreviousTheme('dark')
    }, [theme])



    return (
        <div className='w-full flex flex-row-reverse items-center'>
            <div className='flex flex-row justify-center items-center p-2 mr-20 max-sm:w-full max-sm:mr-0 max-sm:justify-between'>
                <span className=' mr-2 text-xs max-sm:invisible max-sm:mr-0 '>{`SWITCH TO  ${previousTheme.toUpperCase()} THEME  👉 `}</span>
                <ThemeChanger />
            </div>

        </div>
    )
}

export default Navbar