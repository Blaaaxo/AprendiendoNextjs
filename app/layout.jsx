import Link from 'next/link';
import Navbar from '../components/Navbar';
import { Poppins } from "next/font/google"
import './globals.css'


export const metadata = {
  title: 'curso de next js',
  description: 'Aprendiendo next js y de sus propiedades',
}

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className + " bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen" }>

        <Navbar />

        {children}
      </body>
    </html>
  )
}
