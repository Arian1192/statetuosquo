import { decodeJWT } from '../utils/decodeJWT'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import apiWrapper from "../utils/apiWrapper";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import autoprefixer from 'autoprefixer';

const LoginForm = () => {
    const router = useRouter();
    const authContext = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [userError, setUserError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)

    const onSubmit = (data) => {
        apiWrapper("auth/login", "POST", data)
            .then((dataReturned) => {
                if (dataReturned.message === "User not found") {
                    setUserError(dataReturned.message)
                    return
                }else if (dataReturned.message === "Invalid credentials") {
                    setPasswordError(dataReturned.message)
                    return
                } else {
                    const token = dataReturned
                    try{
                        const decodedToken = decodeJWT(token)
                        authContext.setUserAuthInfo(token)
                        authContext.getUserInfo()
                        router.push('/dashboard')
                        
                    }catch(err){
                        console.log(err)
                    }       
                }
            })
    }

    const clearError = () => {
        setUserError(null)
        setPasswordError(null)
    }

    return (

        <div className='flex flex-row items-center justify-center h-[85vh]'>
            <div className="flex flex-row items-center justify-center mt-10">
                <div className="w-full max-w-xs">
                    <form className="px-10 pt-6 pb-8 mb-4 border rounded shadow-lg dark:shadow-xs border-zinc-200 dark:border-gray-600 dark:shadow-black"
                        // por ahora solo imprime los datos en consola
                        onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-row items-center justify-center w-full">
                            <p className="w-6 mx-auto mb-5 mr-2 text-md animate-wave">👋</p>
                            <h2 className="w-full mb-5 text-xl font-bold text-gray-700 max-sm:text-xl dark:text-gray-50">
                                Bienvenido de nuevo
                            </h2>
                        </div>
                        <p className="mb-5 text-xs text-gray-500 max-sm:text-xs dark:text-gray-50">
                            Inicia sesión para recuperar tus Stats 💁
                        </p>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="username">
                                Username
                            </label>
                            <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none dark:text-white focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" {...register("username", { required: true })} onChange={clearError} />
                            {userError && <p className="mt-3 text-xs italic text-red-500">{userError}</p>}
                            {errors.username && <p className="mt-3 text-xs italic text-red-500">Name is required</p>}
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="password">
                                Password
                            </label>
                            <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none dark:text-white focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" {...register("password", { required: true })} onChange={clearError}/>
                            {passwordError && <p className="mt-1 text-xs italic text-red-500" >{passwordError}</p>}
                            {errors.password && <p className="mt-1 text-xs italic text-red-500">Password is required</p>}

                        </div>
                        <div className="flex items-center justify-between">
                            <button className="px-4 py-2 font-bold text-white rounded bg-lime-500 hover:bg-lime-700 focus:outline-none focus:shadow-outline dark:bg-purple-400 dark:hover:bg-purple-800" type="submit"
                            >
                                Sign In
                            </button>
                            <a className="inline-block text-sm font-bold align-baseline text-lime-500 hover:text-lime-700 dark:text-purple-400 dark:hover:text-purple-800" href="#">
                                Forgot Password?
                            </a>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-5 text-sm text-gray-600">
                            <p>No tienes cuenta</p>
                            <Link href='/register' className="text-gray-300 cursor-pointer hover:text-lime-500 dark:hover:text-purple-400">Registrate</Link>
                        </div>
                    </form>
                    <p className="text-xs text-center text-gray-500">
                        &copy;2023 All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm