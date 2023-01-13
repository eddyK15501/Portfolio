import React from 'react'
import BlogPost from '../../components/Blog/BlogPost';
import NavbarTwo from '../../components/Navbar/NavbarTwo';
import Footer from '../../components/Footer/Footer';

const BlogThree = () => {
  return (
    <div>
      <NavbarTwo />
      <BlogPost
        image="https://images.unsplash.com/photo-1543039625-14cbd3802e7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
        alt="blog-three-image"
        title="Three"
        quote="There is nothing impossible to they who will try. - Alexander the Great"
      />
      <Footer />
    </div>
  )
}

export default BlogThree