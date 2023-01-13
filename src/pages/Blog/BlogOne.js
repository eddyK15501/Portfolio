import React from 'react';
import BlogPost from '../../components/Blog/BlogPost';
import NavbarTwo from '../../components/Navbar/NavbarTwo';
import Footer from '../../components/Footer/Footer';

const BlogOne = () => {
  return (
    <div>
      <NavbarTwo />
      <BlogPost
        image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="blog-one-image"
        title="One"
        quote="👑 Keep Calm and Carry On"
      />
      <Footer />
    </div>
  );
};

export default BlogOne;

// ❤️ Live, Laugh, Love ❤️ 
//There is nothing impossible to they who will try