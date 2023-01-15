import Link from 'next/link'
import { useForm } from 'react-hook-form'
import apiWrapper from "../utils/apiWrapper";
import {redirect} from "next/navigation";
import {useRouter} from "next/router";
const LoginForm = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        apiWrapper("auth/login", "POST", data)
            .then((data) => {
                // TODO: devolver el token y guardar en el localstorage o en el context
                // TODO: comprobar el rol del usuario y redirigir a la pagina correspondiente
                console.log(data)
                router.push("/")
            })
    }

    return (
        <div className="flex flex-row justify-center items-center mt-10">
            <div className="w-full max-w-xs">
                <form className="shadow-lg dark:shadow-xs border border-zinc-200 dark:border-gray-600 dark:shadow-black rounded px-10 pt-6 pb-8 mb-4"
                    // por ahora solo imprime los datos en consola
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full flex flex-row justify-center items-center">
                        <p className="w-6 mb-5 text-md animate-wave mx-auto mr-2">👋</p>
                        <h2 className="w-full text-xl text-gray-700 font-bold max-sm:text-xl mb-5 dark:text-gray-50">
                            Bienvenido de nuevo
                        </h2>
                    </div>
                    <p className="text-gray-500 text-xs max-sm:text-xs mb-5 dark:text-gray-50">
                        Inicia sesión para recuperar tus Stats 💁
                    </p>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white" htmlFor="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" {...register("username", { required: true })} />
                        {errors.username && <p className="text-red-500 text-xs italic mt-3">Name is required</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 dark:text-white mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" {...register("password", { required: true })} />
                        {errors.password && <p className="text-red-500 text-xs italic mt-1">Password is required</p>}

                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-purple-400 dark:hover:bg-purple-800" type="submit"
                        >
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-lime-500 hover:text-lime-700 dark:text-purple-400 dark:hover:text-purple-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="flex flex-col text-sm justify-center items-center mt-5 text-gray-600">
                        <p>No tienes cuenta</p>
                        <Link href='/register' className="text-gray-300 cursor-pointer hover:text-lime-500 dark:hover:text-purple-400">Registrate</Link>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2023 All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default LoginForm