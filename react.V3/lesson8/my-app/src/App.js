import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Posts from './components/pages/Posts';
import PostDetail from './components/pages/PostDetail';
import Users from './components/pages/Users';
import UserProfile from './components/pages/UserProfile';
import Navbar from './components/Navbar';
import ErrorPage from './components/pages/ErrorPage';
function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;