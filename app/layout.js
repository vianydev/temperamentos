import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbav';
import MainFooter from './components/mainFooter.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Temperamentos',
  description: 'Descrubre cual es tu temperamento',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <MainFooter />
      </body>
    </html>
  )
}
