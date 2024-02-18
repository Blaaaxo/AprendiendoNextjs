import React from 'react'

async function loadPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()

    return post
}

async function Page({ params }) {

    const post = await loadPost(params.id)

    return (
        <div>
            <h1>{post.id}. {post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default Page