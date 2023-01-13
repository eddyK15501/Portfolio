import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = ({ image, alt, title, quote }) => {
  return (
    <div id="blog-post">
      <div className="blog-post-container">
        <div className="header-container">
          <img src={image} alt={alt} />
          <h1>Blog {title}</h1>
          <h3>{quote}</h3>
        </div>
        <div className="body-container">
          <div className="heading-one">
            <h1>Heading One</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              velit vitae, laudantium maiores minus ipsam voluptatibus nulla
              fuga quae suscipit illo sint expedita, repudiandae illum dolorem
              nesciunt beatae et animi rerum id aperiam laboriosam perspiciatis
              commodi! Dolores nisi sunt architecto ipsam sint quisquam dolor,
              illum laudantium rerum impedit aut nostrum. Nam ullam libero in
              fugit repellat, quam quos necessitatibus, iste, fugiat suscipit
              quibusdam voluptatum aliquam accusamus similique. Nemo deleniti
              veritatis assumenda alias dolorem similique eligendi.
            </p>
          </div>
          <div className="heading-two">
            <h2>Heading Two</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
              voluptas facere impedit incidunt ducimus minima perferendis earum
              beatae cum neque veritatis similique eum asperiores vel, et
              praesentium dicta porro eveniet sapiente. Deleniti amet beatae
              excepturi, nesciunt quibusdam consequatur aut quis dolorum quos
              recusandae sed natus aspernatur vel eligendi quasi harum! Sunt
              quas ducimus aliquid esse, nam itaque neque a quibusdam, illum
              explicabo nihil possimus. Ex aspernatur porro placeat. Excepturi
              esse sunt veritatis odit? Distinctio amet provident atque!
              Laboriosam eum deleniti, cum earum ullam optio, accusamus error
              maxime id mollitia libero, eaque est? Animi delectus molestiae
              error quae odit perspiciatis illum.
            </p>
          </div>
          <div className="heading-three">
            <h3>Heading Three</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              eligendi assumenda reiciendis voluptas deserunt praesentium,
              laborum minima ducimus ratione accusamus provident, repellat
              dolore dicta neque quibusdam maxime id voluptatibus sed.
              Asperiores dolorem officia doloremque ducimus at. Quam harum at
              officia dolores enim deserunt accusantium consectetur quod,
              obcaecati exercitationem tempora beatae sequi porro iusto fugiat
              provident ad. Earum dolores pariatur excepturi adipisci
              exercitationem. Reiciendis debitis consectetur, veniam eaque, rem
              id, molestias vero excepturi repellat ullam commodi saepe? Dicta,
              cupiditate sed eveniet at aut quaerat atque libero porro magni
              nesciunt exercitationem odit consequatur odio dolorum. Hic iste
              numquam fugit fuga voluptate eaque ipsum quam dignissimos quos
              dolorum perspiciatis omnis illo cum maxime totam rem doloremque
              amet quia laudantium natus, nam itaque officiis.
            </p>
          </div>
        </div>
        <Link to="/blog" style={{ textDecoration: 'none' }}><button>Back to Blogs</button></Link>
      </div>
    </div>
  );
};

export default BlogPost;
