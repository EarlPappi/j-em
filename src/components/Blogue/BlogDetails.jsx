import React from "react";
import { useParams } from "react-router-dom";
import InnerWrapper from "../wrapper/InnerWrapper";
import Wrapper from "../wrapper/Wrapper";
import classes from './BlogDetails.module.css'

function BlogDetails() {
  const { blogId } = useParams();

  return (
    <div className={ classes.blogMainCon }>
      <Wrapper>
        <InnerWrapper>
          <h1>Blog Post: {blogId}</h1>
        </InnerWrapper>
      </Wrapper>
    </div>
  );
}

export default BlogDetails;
