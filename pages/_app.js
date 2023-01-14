import '../styles/globals.css'
/**
 * Theme Provider is used to wrap the entire application and provide the theme to all the components.
 */
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )

}

export default MyApp
