import { useTheme } from 'next-themes'
export const ThemeChanger = () => {
    const { theme, setTheme } = useTheme()
    console.log(theme)
    console.log(setTheme)

    const toggleTheme = () => {
        if (theme === 'dark') setTheme('light')
        else setTheme('dark')
    }

    return (
        <div className='w-10 h-20 flex justify-center items-center' onClick={() => toggleTheme()} >
            {theme === 'dark' ? (
                <div className='relative group'>
                    <div className='
                        absolute 
                        inset-0 
                        rounded-sm 
                        blur
                        group-hover:bg-gradient-to-br group-hover:from-red-600  group-hover:to-orange-600'></div>
                    <div className='relative p-2 rounded-md group-hover:bg-gradient-to-br group-hover:from-red-500  group-hover:to-orange-700' >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke='goldenrod'
                            className="w-6 h-6 cursor-pointer group-hover:animate-spin">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                            />
                        </svg>
                    </div>
                </div>) :
                // Moon icon
                (
                    <div className='relative group'>
                        <div className='
                        absolute 
                        inset-0 
                        rounded-sm 
                        blur
                        bg-transparent
                        group-hover:bg-gradient-to-br group-hover:from-black group-hover:to-purple-600'></div>
                        <div className='relative  bg-gradient-to-br from-white to-white p-2 rounded-md group-hover:bg-gradient-to-br group-hover:from-black group-hover:to-purple-400 '>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke='goldenrod'
                                className="w-6 h-6 cursor-pointer group-hover:animate-wave">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                                    onClick={() => toggleTheme()}
                                />
                            </svg>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

//Todo 1: Create a transition effect when pass de cursor over the icon
