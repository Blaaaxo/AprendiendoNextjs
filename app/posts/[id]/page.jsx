import React from 'react'
import PostsPage from '../page'
import { Suspense } from 'react'

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

            <hr />
            <h3>otras publicaciones</h3>
            <Suspense fallback={<div>Cargando publicaciones... </div>}>
                <PostsPage />
            </Suspense>
            
        </div>
    )
}

export default Page