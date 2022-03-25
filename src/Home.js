import BlogList from "./BlogList";
import useFetch from "./useFetch";
// const p = (text) => console.log(text);

const Home = () => {
  const uri = "http://localhost:4000/blogs";
  const { data: blogs, isPending, error } = useFetch(uri);

  return (
    <div className="home">
      {error && <div className="error">{error}</div>}
      {isPending && <h2>Loading...</h2>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
    </div>
  );
};

export default Home;
