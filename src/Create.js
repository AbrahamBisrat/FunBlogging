import { useState } from "react";
import { useNavigate } from "react-router-dom";
// const p = (text) => console.log(text);

const Create = () => {
  const [title, setTitle] = useState("Title");
  const [body, setBody] = useState("What's on your mind...");
  const [author, setAuthor] = useState("Mr. X");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { author, title, body };
    setIsPending(true);

    fetch("http://localhost:4000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    })
      .then((res) => {
        setIsPending(false);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="create-form">
        <h1>Create a new Blog</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <textarea
              type="text"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </div>
          <div className="field submit">
            {!isPending && <button type="submit">Create</button>}
            {isPending && <button disabled>Saving data . . .</button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
