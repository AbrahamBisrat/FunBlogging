// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const p = (text) => console.log(text);

const Home = () => {
  const uri = "http://localhost:4000/blogs";
  const { data, isPending, error } = useFetch(uri);

  const deleteHandler = (id) => {
    fetch(`${uri}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        // useFetch(uri);
        window.location.replace("/");
      })
      .catch((err) => {
        p(err);
      });
  };

  return (
    <div className="home">
      {error && <div className="error">{error}</div>}
      {isPending && <h2>Loading...</h2>}
      {data && (
        <BlogList
          blogs={data}
          title={"All Blogs"}
          deleteHandler={deleteHandler}
        />
      )}
    </div>
  );
};

export default Home;
