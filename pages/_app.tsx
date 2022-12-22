import '../styles/globals.css'
import type { AppProps } from 'next/app'
import withTwindApp from '@twind/next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default withTwindApp(App)
