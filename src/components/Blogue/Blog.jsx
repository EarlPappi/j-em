import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useFetchBlog } from "../../hooks/useFetchBlog";
import InnerWrapper from "../wrapper/InnerWrapper";
import Wrapper from "../wrapper/Wrapper";
import classes from "./Blog.module.css";
import SingleBlog from "./SingleBlog";


function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const blogCat = ["all", "auto", "finance", "tech", "crypto"];
  const [active, setActive] = useState(blogCat[0]);
  const [ment, setMent] = useState("BLOGUE");
  // const [fetchedBlog, setFetchedBlog] = useState([]);

  // const option = {
  //   isFetched: () => {
  //     setFetchedBlog(data.data);
  //     console.log("isFetched: ", fetchedBlog)
  //   }
  // }

  function fetchFn() {
    return axios.get("http://localhost:8000/blogs");
  }

  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchFn,
    // onSuccess: () => {
    //   setFetchedBlog(data?.data);
    // },
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  let fetchedBlog = data?.data;

  console.log("isLoading: ", isLoading);

  return (
    <div className={classes.blogMainCon}>
      <Wrapper>
        <InnerWrapper>
          <InnerWrapper>
            <h1>BLOGUE</h1>

            <div className={classes.catMainCon}>
              {/* Category nav */}
              <div className={classes.catCon}>
                {blogCat.map((cat) => {
                  return (
                    <p
                      key={cat.id}
                      style={{
                        borderBottom:
                          active === cat ? "2px solid black" : "none",
                        background: active === cat ? "#f1f4f9" : "transparent",
                      }}
                      className={classes.catTitle}
                      onClick={() => {
                        setActive(cat);
                        setSelectedCategory(cat);
                        console.log("Selected Cat: ", selectedCategory);
                      }}
                    >
                      {cat}
                    </p>
                  );
                })}
              </div>
            </div>

            <div>
              {isLoading ||
                isFetching && (
                  <div>
                    <ClockLoader />
                  </div>
                )}
              {/* Category news */}
              {!isLoading && !isFetching && (
                <div className={classes.newsGrid}>
                  {fetchedBlog?.map((blog) => {
                    return <SingleBlog blog={blog} />;
                  })}
                </div>
              )}
            </div>
          </InnerWrapper>
        </InnerWrapper>
      </Wrapper>
    </div>
  );
}

export default Blog;
