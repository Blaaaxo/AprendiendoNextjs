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
        <div className='mt-12 max-w-7xl mx-auto px-4 py-4 rounded-xl bg-white'>
            <div className='px-4 py-3'>
                <h1 className='text-3xl font-bold text-gray-900 mb-4'>{post.id}. {post.title}</h1>
                <p className='text-gray-600'>{post.body}</p>

                <hr className='mt-10'/>
                <h3 className='text-2xl mt-4 '>Otras publicaciones</h3>
            </div>
            <Suspense fallback={<div>Cargando publicaciones... </div>}>
                <PostsPage />
            </Suspense>
            
        </div>
    )
}

export default Page