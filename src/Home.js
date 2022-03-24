import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const p = (text) => console.log(text);

const Home = () => {
  // json - server "api" endpoint
  const uri = "http://localhost:4000/blogss";
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const deleteHandler = (id) => {
    fetch(`${uri}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        fetchDBdata(uri);
      })
      .catch((err) => {
        p(err);
      });
  };

  const fetchDBdata = (url) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Couldn't fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setBlogs(data);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  };
  useEffect(() => {
    // run this every render of this component
    p("Use effect triggered!");
    fetchDBdata(uri);
  }, []); // dependency for the useEffect to trigger can be adde to the array

  return (
    <div className="home">
      {error && <div>{error}</div>}
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
