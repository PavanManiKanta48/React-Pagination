import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

function App() {
  const [data, setData] = useState([]);
  const [perPage, setPerpage] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
      setPerpage(res.data.slice(0, 10));
    });
  }, []);
  const pageHandler = (pageNumber) => {
    setPerpage(data.slice(pageNumber * 10 - 10, pageNumber * 10));
  };
  return (
    <div>
      {data.length >= 1 ? (
        <div>
          {perPage.map((post) => (
            <div className="post">{post.title}</div>
          ))}
          <br></br>
          <Pagination data={data} pageHandler={pageHandler} />
        </div>
      ) : (
        <p>data not loaded</p>
      )}
    </div>
  );
}

export default App;
