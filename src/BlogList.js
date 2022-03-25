import { useNavigate, Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  const uri = "http://localhost:4000/blogs";
  const navigate = useNavigate();
  const deleteHandler = (id) => {
    fetch(`${uri}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        navigate(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((post) => (
        <div className="blog-preview" key={post.id}>
          <Link to={`/blogs/${post.id}`}>
            <h2>{post.title}</h2>
            <p>
              <small>Written by: {post.author}</small>
            </p>
            <p>{post.body}</p>
          </Link>
          <button onClick={() => deleteHandler(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
