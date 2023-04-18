import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"

function fetchFn(){
    // return axios.get("http://localhost:8000/blogs")
    return axios.get("https://my-json-server.typicode.com/EarlPappi/j-em/blogs")
}

const addBlogRequest = (blog) => {
    return axios.post(
      "https://my-json-server.typicode.com/EarlPappi/j-em/blogs", blog
    );
  };

export const useAddBlog = () =>{
    return useMutation(addBlogRequest)
}

export const useFetchBlog = () =>{
   return useQuery({
        queryKey: ["blogs"],
        queryFn: fetchFn,        
    })
}