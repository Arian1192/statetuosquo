import React from 'react'
import { ThemeChanger } from './ThemeChanger'

const Navbar = () => {
    return (
        <div className='w-full flex justify-end items-center p-5'>
            <ThemeChanger />
            <div>
                Hola
            </div>
        </div>
    )
}

export default Navbar