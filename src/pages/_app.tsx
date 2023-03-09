import type { AppProps } from 'next/app'
import { Poppins } from '@next/font/google'
import Header from '../components/Header'
import '@/styles/globals.scss'
import Providers from '@/context'

const poppins = Poppins({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return  (
    <>
      <Providers>
        <main className={poppins.className}>
          <Header />
          <Component {...pageProps} />
        </main>
      </Providers>
    </>
  )
}
