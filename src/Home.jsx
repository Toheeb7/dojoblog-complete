import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("blogs");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setBlogs(Array.isArray(parsed) ? parsed : []);
      } catch (error) {
        console.error("Error parsing blogs from localStorage", error);
        setBlogs([]);
      }
    } else {
      setBlogs([]);
    }
  }, []);

  return (
    <div className="home">
      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        <BlogList blogs={blogs} title="All Blogs" />
      )}
    </div>
  );
};

export default Home;
