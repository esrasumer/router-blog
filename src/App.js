import Header from './components/Header';
import Layout from './Layout';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import About from './components/About';
import Missing from './components/Missing';
import { Switch, useHistory, NavLink, Outlet } from 'react-router-dom';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />} >
           <Route path='header' element={<Header title='React JS Blog'/>} />
          <Route path='' element={<Home />} />
          <Route path='nav' element={<Nav />} />
          <Route path='footer' element={<Footer />} />
          <Route path='newPost' element={<NewPost />} />
          <Route path='postPage' element={<PostPage />} />
          <Route path='about' element={<About />} />
          <Route path='missing' element={<Missing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
