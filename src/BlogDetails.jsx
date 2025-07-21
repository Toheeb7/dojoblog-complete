import { useParams, useNavigate } from "react-router-dom";

const BlogDetails = ({ blogs, setBlogs }) => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));
  const navigate = useNavigate();

  const handleDelete = () => {
    const updatedBlogs = blogs.filter(b => b.id !== blog.id);
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    navigate("/");
  };

  return (
    <div className="blog-details">
      {blog ? (
        <>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </>
      ) : (
        <div>Blog not found</div>
      )}
    </div>
  );
};

export default BlogDetails;
