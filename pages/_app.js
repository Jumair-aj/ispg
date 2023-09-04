import '@/styles/globals.css'
import { Mulish } from 'next/font/google'
 
const poppins = Mulish({
  weight: ['200','300','400'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
  <main className={poppins.className}>
  <Component {...pageProps} />
</main>)
}
