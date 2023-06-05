import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FilmFinder',
  description: 'FilmFinder: Discover, Explore, and Experience Movies Like Never Before! Your ultimate destination for movie discovery, personalized recommendations, and in-depth film information. Unlock the world of cinematic adventure at your fingertips.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <Search />
        {children}
      </body>
    </html>
  )
}
