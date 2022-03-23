const BlogList = ({ blogs, title, deleteHandler }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((post) => (
        <div className="blog-preview" key={post.id}>
          <h2>{post.title}</h2>
          <p>
            <small>Written by: {post.author}</small>
          </p>
          <p>{post.body}</p>
          <button onClick={() => deleteHandler(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
