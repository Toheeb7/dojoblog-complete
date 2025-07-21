import React from "react";

const BlogList = ({ blogs = [], title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.length === 0 && <p>No blogs found.</p>}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h3>{blog.title}</h3>
          <p>Written by Toheeb</p>
          <a href={`/blogs/${blog.id}`}>Read more</a>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
