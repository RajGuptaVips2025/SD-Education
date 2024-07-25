import React, { useState} from "react";
import BlogForm from "./BlogForm";

const Blog = ({userId}) => {

  return (
    <div className="container mx-auto p-6">
      <BlogForm userId={userId}/>
    </div>
  );
};

export default Blog;
