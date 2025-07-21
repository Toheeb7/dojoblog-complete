import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = {
      title,
      body,
      author,
      id: Date.now()
    };

    // Get existing blogs or default to empty array
    const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    // Add new blog and update localStorage
    const updatedBlogs = [...existingBlogs, blog];
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

    // Navigate back to home
    navigate("/");
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Toheeb</option>
          
        </select>

        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
