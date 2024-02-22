import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PostList, { postLoader } from './component/PostList.jsx';
import CreatePost, { createPostAction } from './component/CreatePost.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <PostList />, loader: postLoader },
      { path: '/create-post', element: <CreatePost />, action: createPostAction }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
