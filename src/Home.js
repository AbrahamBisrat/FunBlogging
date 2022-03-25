import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
const p = (text) => console.log(text);

const Home = () => {
  const uri = "http://localhost:4000/blogs";
  const { data: blogs, isPending, error } = useFetch(uri);
  const navigate = useNavigate();

  const deleteHandler = (id) => {
    fetch(`${uri}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        // useFetch(uri);
        // window.location.replace("/");
        navigate(0);
        // return <Redirect to="/" />;
        // const navigator = useNavigate();
        // navigator("/");
      })
      .catch((err) => {
        p(err);
      });
  };

  return (
    <div className="home">
      {error && <div className="error">{error}</div>}
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
