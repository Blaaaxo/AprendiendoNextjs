import React from 'react'
import PostCard from '../../components/PostCard'
import { resolve } from 'styled-jsx/css';

async function loadPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    // en caso de que los datos demoren
    await new Promise((resolve) => setTimeout(resolve, 3000))

    return data;
}

// RSC (react server component)
async function PostsPage() {

    const posts = await loadPosts();
    console.log(posts);

    return (
        <section className='mt-12 max-w-7xl mx-auto rounded-xl bg-white'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-3 py-4'>
                {posts.map((post) => (
                    <PostCard post={post} key={post.id}/>
                ))}
            </div>
            
        </section>
    );
}

export default PostsPage;

