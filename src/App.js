function App() {
  return (
    <div className="App">
      <header>
        <h1>Wikipedia Seeker</h1>
        <form className="search-box">
          <input type="search" placeholder="What are you looking for?" />
          
        </form>
        <p>Search Results: 0</p>
      </header>
      <div className="results">
        <div className="result">
          <h3>Title Goes Here</h3>
          <p>
            Lorem Ipsum dolor sit amet
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default App;
