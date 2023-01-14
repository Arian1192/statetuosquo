import '../styles/globals.css'
/**
 * Theme Provider is used to wrap the entire application and provide the theme to all the components.
 */
import { ThemeProvider } from 'next-themes'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )

}

export default MyApp
