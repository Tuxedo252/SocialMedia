import React, { useState } from 'react';
import './App.css';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Sidebar from '../component/Sidebar';
import CreatePost from '../component/CreatePost';
import PostList from '../component/PostList';
import PostListContextProvider from '../store/post-list-store';
import { Outlet } from 'react-router-dom';

export default function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListContextProvider>
      <div className='app-container'>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className='content'>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListContextProvider>
  )
}
