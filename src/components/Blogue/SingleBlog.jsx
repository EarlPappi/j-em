import React from "react";
import classes from "./SingleBlog.module.css";

function SingleBlog({ blog }) {
  return (
    <div className={classes.singleBlogCon}>
      <div className={classes.innerCon}>
        <div>
          <img src={blog.imgUrl} alt={blog.title} width="100%" />
        </div>
        <p>{blog.title}</p> 
      </div>

      {/* <Link to={`/`}>Headline - Go Home</Link> */}
    </div>
  );
}

export default SingleBlog;
