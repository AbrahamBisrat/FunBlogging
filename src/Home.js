import { useState } from "react";
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
  const more = () => {
    p(blogs);
    setBlogs.unshift({
      title: "new",
      body: "ldjf",
      author: "meaw",
      id: 4,
    });
    p(blogs);
  };
  return (
    <div className="home">
      {blogs.map((post) => (
        <div className="blog-preview" key={post.id}>
          <h2>{post.title}</h2>
          <p>
            <small>Written by: {post.author}</small>
          </p>
          <p>{post.body}</p>
        </div>
      ))}
      <button onClick={more}>Add More</button>
    </div>
  );
};

export default Home;
