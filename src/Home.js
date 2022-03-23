import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const p = (text) => console.log(text);

const Home = () => {
  // json - server "api" endpoint
  const uri = "http://localhost:4000/blogs";
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const deleteHandler = (id) => {
    fetch(`${uri}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        fetchDBdata(uri);
      })
      .catch((err) => {
        p("Something went wrong while deleting the blog!");
        p(err);
      });
  };

  const fetchDBdata = (url) => {
    fetch(url)
      .then((data) => data.json())
      .then((parsedBlogArray) => {
        setIsPending(false);
        setBlogs(parsedBlogArray);
      })
      .catch((err) => p(err));
  };
  useEffect(() => {
    // run this every render of this component
    p("Use effect triggered!");
    fetchDBdata(uri);
  }, []); // dependency for the useEffect to trigger can be adde to the array

  return (
    <div className="home">
      {isPending && <h2>Loading...</h2>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title={"All Blogs"}
          deleteHandler={deleteHandler}
        />
      )}
    </div>
  );
};

export default Home;
