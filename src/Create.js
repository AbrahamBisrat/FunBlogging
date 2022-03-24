const Create = () => {
  return (
    <div>
      <h1>Create a new Blog</h1>
      <div className="create-form">
        <form action="http://localhost:4000/blogs" method="POST">
          <div className="field">
            <input type="text" placeholder="Mr. X" name="author" required />
          </div>
          <div className="field">
            <input type="text" placeholder="title" name="title" required />
          </div>
          <div className="field">
            <textarea
              type="text"
              placeholder="What's on your mind? ../"
              name="body"
              required
            />
          </div>
          <div className="field submit">
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
