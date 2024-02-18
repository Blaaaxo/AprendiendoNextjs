"use client"
import React from 'react'
import Link from 'next/link'

// RCC (react client component)
function PostCard({ post }) {
    return (
        <div>
            <Link href={`/posts/${post.id}`}>
                <h2>{post.id}. {post.title}</h2>
            </Link>
            <p>{post.body}</p>
            <button onClick={() => {
                alert("click funcionando en el post numero " + post.id)
            }}>Click</button>
        </div>
    )
}

export default PostCard