import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import Pagination from "./components/Pagination";

function App() {
  const [data, setData] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage,setPostsPerPage] = useState(10);
  useEffect(() => {
    Axios.get("https://dummyjson.com/products").then((response) => {
      // console.log(response.data.products);
      setData(response.data.products);
    });
  }, []);
  function handleCurrentPage(page){
    setCurrentPage(page);
  }

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex,lastPostIndex);

  return (
    <>
      <table>
        <tr>
          <th>S.no</th>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th>PRICE</th>
        </tr>
        {
          currentPosts.map((element,index)=><tr>
            <td>{element.id}</td>
            <td>{element.title}</td>
            <td>{element.description}</td>
            <td>{element.price}</td>
          </tr>)
        }
      </table>
      <Pagination totalPosts={data.length} postsPerPage={postsPerPage} onSetPage={handleCurrentPage}/>
    </>
  );
}

export default App;
