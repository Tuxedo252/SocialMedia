import React, { useContext, useRef } from 'react'
import { PostListContext } from '../store/post-list-store';
import { Form, redirect, useNavigate } from 'react-router-dom';

const CreatePost = () => {
    return (
        <Form method='POST' className='create-post'>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">Enter user id</label>
                <input name='userId' type="text" className="form-control" id="userId" />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input name='title' type="text" className="form-control" id="title" />
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea name='body' rows={4} type="text" className="form-control" id="body" />
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Please enter tags with space</label>
                <input name='tags' type="text" className="form-control" id="tags" />
            </div>
            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">How many reactions you get on this post</label>
                <input name='reactions' type="text" className="form-control" id="reactions" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
    )
}

export const createPostAction = async (data) => {
    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData);
    fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        });

    return redirect("/");
}

export default CreatePost
