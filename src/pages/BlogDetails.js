import React from 'react'
import { useParams } from 'react-router-dom'

function BlogDetails() {
    const {blogId} = useParams()

  return (
    <div>BlogDetails {blogId}</div>
  )
}

export default BlogDetails