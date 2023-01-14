import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { ThemeChanger } from '../components/ThemeChanger'
import { dataBaseConnection } from '../lib/mongo'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  console.log(props)
  return (
    <h1>Home</h1>
  )
}

export async function getServerSideProps(){
  try{
    await dataBaseConnection()
    return {props: {}}
  }
  catch(err){
    console.log(err)
  }
}
