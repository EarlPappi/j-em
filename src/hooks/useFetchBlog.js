import { useQuery } from "@tanstack/react-query"
import axios from "axios"

function fetchFn(){
    return axios.get("http://localhost:8000/blogs")
}

export const useFetchBlog = () =>{
   return useQuery({
        queryKey: ["blogs"],
        queryFn: fetchFn,
        
    })
}