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
        <div>
            {posts.map((post) => (
                <PostCard post={post} key={post.id}/>
            ))}
        </div>
    );
}

export default PostsPage;

