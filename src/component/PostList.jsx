import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import WelcomeMessage from './WelcomeMessage'
import LoadingSpinner from './LoadingSpinner';
import { useLoaderData } from 'react-router-dom';


function PostList() {


    const postList = useLoaderData();

    return (
        <div className='posts-container'>
            {postList.length === 0 && <WelcomeMessage
            //  onGetPostClick={handleGetPostClick}
            />}
            {postList.map((post) => {
                return <Post key={post.id} post={post} />
            })}
        </div>
    )
}

export const postLoader = () => {
    return fetch('https://dummyjson.com/posts ')
        .then(res => res.json())
        .then((data) => {
            return data.posts;
        });
}

export default PostList;

