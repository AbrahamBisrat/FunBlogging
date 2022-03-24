import { useParams } from "react-router";

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <div className="blog-detail">
      <h2>Blog Details</h2>
      <h2>for {id} </h2>
    </div>
  );
};

export default BlogDetails;
