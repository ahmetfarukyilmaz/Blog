import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs,setBlogs]=useState([
        
        {title:"Blog 1",body:"test1",author:"faruk",id:1},
        {title:"Blog 2",body:"test2",author:"faruk",id:2},
        {title:"Blog 3",body:"test3",author:"faruk",id:3},
    ])
  return (
    <div className="home">
        <BlogList blogs={blogs} title="Blog Master"/>
        <BlogList blogs={blogs.filter((blog)=> blog.id==1 )} title="Blog Master"/>
    
    </div>
  );
};

export default Home;
