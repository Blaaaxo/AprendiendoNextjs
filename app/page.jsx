"use client"

import React from 'react'

export default function HomePage(){
    return (
        <section>
            <h1>Home Page</h1>
            <p>Welcome to the home page</p>
            <button onClick={() => {
                alert('Welcome!')
            }}>
                Click
            </button>
        </section>
    )
}