import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const uri = "http://localhost:4000/blogs/";
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(uri + id);

  return (
    <div className="blog-detail">
      {isPending && <h1>Loading....</h1>}
      {error && <h1>{error}</h1>}
      {blog && (
        <article>
          <h1>{blog.title}</h1>
          <p>
            <small>written by: {blog.author}</small>
          </p>
          <p>{blog.body}</p>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
