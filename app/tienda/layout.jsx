import React from 'react'
import Link from 'next/link'

export const metadata = {
    title: 'Tienda Curso next'
}

const layoutTienda = ({children}) => {
  return (
    <>
        <nav>
            <h2>Menu de tienda</h2>
            <ul>
                <li>
                    <Link href={`/tienda`}>Home</Link>
                </li>
                <li>
                    <Link href={'/tienda/categorias'}>Categorias</Link>
                </li>
            </ul>
        </nav>

        {children}
    </>
  )
}

export default layoutTienda