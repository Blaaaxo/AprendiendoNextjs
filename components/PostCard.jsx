"use client"
import React from 'react'

// RCC (react client component)
function PostCard({ post }) {
    return (
        <div>
            <h2>{post.id}. {post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => {
                alert("click funcionando en el post numero " + post.id)
            }}>Click</button>
        </div>
    )
}

export default PostCard