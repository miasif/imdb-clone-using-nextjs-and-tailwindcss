import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/app/Providers'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is a IMDb clone website',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <Providers>

        <Header/>
          <Navbar/>
        {children}
        </Providers>

      
      </body>
    </html>
  )
}
