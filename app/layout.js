import Link from 'next/link';
import Navbar from '../components/Navbar';


export const metadata = {
  title: 'curso de next js',
  description: 'Aprendiendo next js y de sus propiedades',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>

        <Navbar />

        {children}
      </body>
    </html>
  )
}
