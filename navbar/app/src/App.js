import Home from "./Home"
import Article from "./Article"
import Navbar  from "./navbar";
import Contact from "./Contact";
import './App.css';
import { useEffect, useState } from "react";

function App() {
  let [page, setPage]=useState("articl e");
  let [articles, setArticles]=useState([]);
  let [article, setArticle]=useState({});
  let content=""
  switch(page){
    case "home": content=<Home/>; break;
    case "article": content=<Article/>; break;
    case "contact": content=<Contact/>; break;
  }

  let articles = [
    {id:1,title:"Titre 1",body:"body body body ..............."},
    {id:2,title:"Titre 2",body:"body body body ..............."},
    {id:3,title:"Titre 3",body:"body body body ..............."},
    {id:4,title:"Titre 4",body:"body body body ..............."}
  ];

  function handlePageChange(newpage){
    console.log(newpage);
    setPage(newpage)
  }
  useEffect(() =>{
    window.history.pushState("object or String","Title","")
  })
  return (
    <div className="App">
      <header className="App-header">
        <Navbar handler={handlePageChange} ActivePage={page} />
        {content}
      </header>
    </div>
  );
}

export default App;
