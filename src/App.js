import { useState,useEffect } from 'react';
import AddBlog from './components/AddBlog.js'
import ListBlogs from './components/ListBlogs.js'


function App() {
  let initTodo;
  if (localStorage.getItem("blogs") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("blogs"));
  }
  const deleteBlog = (blog) => {

    setBlogs(blogs.filter((e) => {
      return e !== blog;
    }));
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }
  const addTodo=(title, description)=> {
    console.log("I am adding this blog", title, description)
    const myBlog = {
      title: title,
      description: description
    }
    
    setBlogs([...blogs, myBlog]);
   
  }
  const [blogs, setBlogs]=useState(initTodo);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs])
  return (
    <div className="container">
      <h1>React Blog App</h1>
      <AddBlog addTodo={addTodo} />
      <ListBlogs blogs={blogs} deleteBlog={deleteBlog}></ListBlogs>
    </div>
  );
}

export default App;
