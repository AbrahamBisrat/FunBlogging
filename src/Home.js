import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const p = (text) => console.log(text);

const Home = () => {
  // json - server "api" endpoint
  const uri = "http://localhost:4000/blogs";
  const [blogs, setBlogs] = useState(null);

  const deleteHandler = (id) => {
    setBlogs(blogs.filter((eachPost) => eachPost.id != id));
  };
  useEffect(() => {
    // run this every render of this component
    p("Use effect triggered!");
    fetch(uri)
      .then((data) => data.json())
      .then((parsedBlogArray) => {
        p("data is ready");
        p(parsedBlogArray);
        setBlogs(parsedBlogArray);
      })
      .catch((err) => p(err));
  }, []); // dependency for the useEffect to trigger can be adde to the array

  return (
    <div className="home">
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
