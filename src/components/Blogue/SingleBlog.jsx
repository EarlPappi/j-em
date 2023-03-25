import React from "react";
import { Link } from "react-router-dom";
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

      <Link to={`/blogue/${blog.id}`}>Read More</Link>
    </div>
  );
}

export default SingleBlog;
