import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className='flex px-8 py-4 bg-black text-white'>
      <h1 className='text-3xl mr-4'>Navbar</h1>
      <ul className='flex gap-4 items-center justify-center flex-1'>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/tienda">Tienda</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar