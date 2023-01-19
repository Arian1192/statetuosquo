import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { ThemeChanger } from '../components/ThemeChanger'
import { dataBaseConnection } from '../lib/mongo'
import styles from '../styles/Home.module.css'

export default function Home(props) {

  const goToLogin = () => {
    window.location.href = '/login'
  }

  const goToRegister = () => {
    window.location.href = '/register'
  }


  return (
    <div className='w-full flex flex-row justify-center items-center gap-2'>
      <button className='bg-lime-500 hover:bg-lime-700 dark:bg-purple-400 dark:hover:bg-purple-800 shadow-lg font-bold text-white rounded-md p-2'
        onClick={goToLogin}
      >Login</button>
      <button className='bg-lime-500 hover:bg-lime-700 dark:bg-purple-400 dark:hover:bg-purple-800 shadow-lg font-bold text-white rounded-md p-2'
        onClick={goToRegister}
      >Register</button>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    await dataBaseConnection()
    return {
      props: {}
    }
  }
  catch (err) {
    console.log(err)
  }
}

