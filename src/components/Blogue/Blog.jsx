import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClockLoader } from "react-spinners";
import { useFetchBlog } from "../../hooks/useFetchBlog";
import { getBlogs } from "../../store/slices/blogSlices";
import { store } from "../../store/store";
import InnerWrapper from "../wrapper/InnerWrapper";
import Wrapper from "../wrapper/Wrapper";
import classes from "./Blog.module.css";
import SingleBlog from "./SingleBlog";

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const blogCat = ["all", "auto", "finance", "tech", "crypto"];
  const [active, setActive] = useState(blogCat[0]);
  const dispatch = useDispatch();

  const { data: HData } = useFetchBlog();

  console.log("HDATA: ", HData?.data);

  function fetchFn() {
    // return axios.get("http://localhost:8000/blogs");
    return axios.get(
      "https://my-json-server.typicode.com/EarlPappi/j-em/blogs"
    );
  }

  const { isLoading, data, isFetching, error, isError, refetch, isFetched } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchFn,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval:  false
  });

  const storeBlog = useSelector((state) => state.blog);
  
  useEffect(() => {
     dispatch(getBlogs(HData?.data));
  }, [HData])
  

  console.log("STOREBLOG: ",storeBlog);

  // console.log("BLOGDATA: ", data)
  let fetchedBlog = data?.data;

  const filteredCat = fetchedBlog?.filter((item) => {
    if (item.category === selectedCategory) {
      return true;
    } else if (selectedCategory === "") {
      return true;
    }
    return false;
  });

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
                        if (cat === "all") {
                          setSelectedCategory("");
                          return;
                        } else {
                          setSelectedCategory(cat);
                        }
                        console.log("Selected Cat: ", selectedCategory);
                      }}
                    >
                      {cat}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Blog grid  */}
            <div>
              {(isLoading || isFetching) && (
                <div className={classes.fetchRes}>
                  <ClockLoader />
                  <p>Fetching Blogs</p>
                </div>
              )}

              {isError && (
                <div className={classes.fetchRes}>
                  <pre>{error.message}</pre>
                  <p>
                    We encountered the error above, kindly refresh to try again
                  </p>

                  <button onClick={refetch}>Refresh</button>
                </div>
              )}

              {/* Category news */}
              {!isLoading && !isFetching && (
                <div className={classes.newsGrid}>
                  {filteredCat?.map((blog) => {
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
