const ListBlogs = ({blogs,deleteBlog}) => {
  console.log(blogs);
  return (
    <div>
      <h2>All Blogs</h2>
      { 
    blogs.map( blog => {
        console.log(blog);
        return <div>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
          <button className="btn btn-sm btn-danger" onClick={()=>{deleteBlog(blog)}}>Delete this blog</button> 
          </div>
    })
}
    </div>
  );
}
 
export default ListBlogs;