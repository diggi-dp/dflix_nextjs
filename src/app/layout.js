import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Mulish } from 'next/font/google'

const mulish = Mulish({
  weight: ['300', '400', '600', '500', '700', '800', '900'],
  subsets: ['latin'],
})


export const metadata = {
  title: 'DFlix',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
