const p = (text) => console.log(text);
const Home = () => {
  const handleClick = (event) => {
    p("Click handled");
    p(event);
  };
  const handleThis = (names) => p(names);

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={(event) => handleClick(event)}>Click Me</button>
      <button onClick={() => handleThis("potatos")}>Click me 2</button>
    </div>
  );
};

export default Home;
