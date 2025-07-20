import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs/" + id)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => navigate("/"));
  };

  return (
    <div className="blog-details">
      {blog && (
        <>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default BlogDetails;
