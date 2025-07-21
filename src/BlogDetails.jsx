// src/BlogDetails.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const foundBlog = storedBlogs.find((b) => b.id.toString() === id);
    setBlog(foundBlog);
  }, [id]);

  return (
    <div className="blog-details">
      {blog ? (
        <article>
          <h2>{blog.title}</h2>
          <p><strong>Written by:</strong> Bello Toheeb</p>
          <div>{blog.body}</div>
        </article>
      ) : (
        <div>Blog not found</div>
      )}
    </div>
  );
};

export default BlogDetails;
