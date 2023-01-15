import '../styles/globals.css'
/**
 * Theme Provider is used to wrap the entire application and provide the theme to all the components.
 */
import { ThemeProvider } from 'next-themes'
import Navbar from '../components/Navbar'
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Head>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
    <ThemeProvider attribute="class" enableSystem={false}>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
      </>
  )

}

export default MyApp
