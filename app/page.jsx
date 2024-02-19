"use client"

import React from 'react'

export default function HomePage(){
    return (
        <section className='mt-12 max-w-7xl mx-auto rounded-xl bg-white px-4 py-5'>
            <h1 className='text-7xl font-bold text-gray-900 mb-4'>Home Page</h1>
            <p className='text-gray-600 '>Welcome to the home page</p>
            <button onClick={() => {
                alert('Welcome!')
            }} className='text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                Click
            </button>
        </section>
    )
}