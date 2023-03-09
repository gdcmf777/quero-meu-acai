import type { AppProps } from 'next/app'
import Header from '../components/Header'
import '@/styles/globals.scss'
import Providers from '@/context'

export default function App({ Component, pageProps }: AppProps) {
  return  (
    <>
      <Providers>
        <Header />
        <Component {...pageProps} />
      </Providers>
    </>
  )
}
