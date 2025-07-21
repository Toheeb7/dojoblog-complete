import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  const addBlog = (blog) => {
    const newBlogs = [...blogs, blog];
    setBlogs(newBlogs);
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home blogs={blogs} />} />
            <Route path="/create" element={<Create addBlog={addBlog} />} />
            <Route path="/blogs/:id" element={<BlogDetails blogs={blogs} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
