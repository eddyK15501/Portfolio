import React from 'react'
import BlogPost from '../../components/Blog/BlogPost';
import NavbarTwo from '../../components/Navbar/NavbarTwo';
import Footer from '../../components/Footer/Footer';

const BlogTwo = () => {
  return (
    <div>
      <NavbarTwo />
      <BlogPost
        image="https://images.unsplash.com/photo-1583833008338-31a6657917ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="blog-two-image"
        title="Two"
        quote=" ❤️ Live, Laugh, Love ❤️ "
      />
      <Footer />
    </div>
  )
}

export default BlogTwo