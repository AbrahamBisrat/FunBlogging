import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const p = (text) => console.log(text);

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Coding @ 3:20 am is fun",
      body: "lorem ipsum....",
      author: "bananas",
      id: 1,
    },
    {
      title: "Should you learn React?",
      body: "lorem ipsum....",
      author: "potatos",
      id: 2,
    },
    {
      title: "I would kill for a pizza now",
      body: "lorem ipsum....",
      author: "sushi",
      id: 3,
    },
  ]);

  const deleteHandler = (id) => {
    setBlogs(blogs.filter((eachPost) => eachPost.id != id));
  };
  useEffect(() => {
    // run this every render of this component
    // if you change state of the useState element here
    // this fuction will run thus producing a loop until
    // resources run out.
    // careful not to make side-effects here
    p("Use effect triggered!");
  }, []);
  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title={"All Blogs"}
        deleteHandler={deleteHandler}
      />
    </div>
  );
};

export default Home;
