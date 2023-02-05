import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog/Blog';
import Resume from './pages/Resume/Resume';
import BlogOne from './pages/Blog/BlogOne';
import BlogTwo from './pages/Blog/BlogTwo';
import BlogThree from './pages/Blog/BlogThree';
import { ScrollToTop } from './components/ScrollToTop';

const App = () => {
  return (
    <div id="main">
      <Router>
        <ScrollToTop />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resume" element={<Resume />} />

            <Route path="/blog/blogone" element={<BlogOne />} />
            <Route path="/blog/blogtwo" element={<BlogTwo />} />
            <Route path="/blog/blogthree" element={<BlogThree />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
