import React from 'react';
import './BlogPage.css';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  return (
    <div id="blogs">
      <div className="container">
        <div className="header">
          <h1>Blog</h1>
          <h3>
            I don't blog often, but when I do, they're pretty legendary.{' '}
            <strong>- The Dos Equis Guy</strong>{' '}
          </h3>
        </div>

        <div className="blog-container">
          <div className="grid-container">
            <div className="blog-one">
              <Link to="/blog/blogone">
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="blog-one-img"
                />
              </Link>

              <h2>Blog One</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, culpa tempora incidunt expedita ex similique modi
                tenetur consequuntur ratione quasi possimus dolorem corrupti
                ipsa. Quis repudiandae iure cum blanditiis explicabo? Provident,
                id voluptates atque illum vel omnis saepe in voluptatibus, ipsam
                ullam dolores! Tempore nisi quisquam saepe est delectus at...
                <br />
                <br />
                <Link to="/blog/blogone" className="Link">Read More</Link>
              </p>
            </div>

            <div className="blog-two">
              <Link to="/blog/blogtwo">
                <img
                  src="https://images.unsplash.com/photo-1583833008338-31a6657917ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="blog-two-img"
                />
              </Link>

              <h2>Blog Two</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                maxime accusantium aspernatur doloribus voluptas culpa
                laudantium exercitationem ipsam autem quo? Unde, illo dolor!
                Fugiat tenetur excepturi cupiditate debitis delectus laborum
                animi mollitia quos impedit, omnis obcaecati doloribus
                reprehenderit accusantium qui assumenda necessitatibus, dolorum
                veniam! Possimus quibusdam id nobis. Amet, minus...<Link to="/blog/blogtwo" className="Link">Read More</Link>
              </p>
            </div>

            <div className="blog-three">
              <Link to="/blog/blogthree">
                <img
                  src="https://images.unsplash.com/photo-1543039625-14cbd3802e7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
                  alt="blog-three-img"
                />
              </Link>

              <h2>Blog Three</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci et repellat ad quia ipsa iste expedita quod
                necessitatibus dolor perspiciatis, rerum exercitationem
                praesentium assumenda, ut maxime odio ullam doloribus.
                Exercitationem saepe porro suscipit velit iste excepturi odio
                molestiae pariatur eveniet! Exercitationem voluptatum quaerat
                earum molestiae ad repudiandae facilis ut tempora...<Link to="/blog/blogtwo" className="Link">Read More</Link>
              </p>
            </div>
          </div>
        </div>
        <Link to="/" style={{ textDecoration: 'none' }}><button>Back to Home</button></Link>
      </div>
    </div>
  );
};

export default BlogPage;
