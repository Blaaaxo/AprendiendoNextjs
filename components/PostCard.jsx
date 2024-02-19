"use client"
import React from 'react'
import Link from 'next/link'

// RCC (react client component)
function PostCard({ post }) {
    return (
        <div className='px-4 py-3 bg-gray-400 rounded-xl'>
            <Link href={`/posts/${post.id}`} className='cursor-pointer'>
                <h2 className='text-3xl font-bold text-gray-900'>{post.id}. {post.title}</h2>
            </Link>
            <p className='text-gray-700'>{post.body}</p>
            <button onClick={() => {
                alert("click funcionando en el post numero " + post.id)
            }} className='mt-4text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Click</button>
        </div>
    )
}

export default PostCard