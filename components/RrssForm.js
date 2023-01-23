import { useForm, useState } from 'react-hook-form'
import { useContext } from 'react'
import { useToggle } from '../utils/hooks/useToggle'
import { AuthContext } from '../contexts/AuthContext'
import apiWrapper from '../utils/apiWrapper'


const RrssForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    // const { rrss, setRrss } = useContext(RrssContext)
    const [closeModal, setCloseModal] = useToggle(false)
    const authContext = useContext(AuthContext)
    console.log(authContext.userInfo)

    const onSubmit = (data) => {
        apiWrapper(`user/${authContext.userInfo.id}/rrss`, 'POST', data).then(dataReturned => console.log(dataReturned))
        setCloseModal(!closeModal)
    }

    return (
        <div className={`${closeModal && 'hidden'} absolute flex z-50 w-full h-screen bg-black bg-opacity-80`}>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center  m-auto w-full max-w-xs py-5 bg-white dark:bg-[#1B2430] rounded-lg'>
                <button onClick={setCloseModal} className='flex flex-row justify-end w-full pr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-700 hover:animate-wave">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className='my-4 mt-2'>
                    <h1 className='mb-2 text-2xl font-bold text-gray-700 dark:text-white'>Add your social media</h1>
                    <p className='text-2xl font-bold text-center text-gray-700 dark:text-white'>{authContext.userInfo.username}</p>
                </div>
                <div className="mt-4 mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="username">
                        Twitter username
                    </label>
                    <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none dark:text-white focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="@testdev" {...register("twitterName", { required: true })} />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="username">
                        Instagram username
                    </label>
                    <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none dark:text-white focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="/testdev" {...register("instagramName", { required: true })} />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="username">
                        Twitch username
                    </label>
                    <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none dark:text-white focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="/testdev" {...register("twitchName", { required: true })} />
                </div>
                <input type="submit" className='w-3/5 px-4 py-2 my-4 font-bold text-white rounded-md mt bg-lime-500 hover:bg-lime-700 dark:bg-purple-400 dark:hover:bg-purple-800' />
            </form>

        </div >
    )
}

export default RrssForm