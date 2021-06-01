import { useState } from "react";

const AddBlog = ({addTodo}) => {
  
  const[title, setTitle]=useState("");
  const[description, setDescription]=useState("");

  const submit=(e)=>{
    e.preventDefault();
    addTodo(title, description);
    setTitle("");
    setDescription("");
  }
  return (
    <form onSubmit={submit}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
        <textarea className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-primary mb-3">Add a new blog</button>
    </form>
  );
}
 
export default AddBlog;