//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data.js";
// import data

const PostsPage = () => {
  const posts = dummyData;

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {posts.map( post =>
        <Post post={post} />)}
    </div>
  );
};

export default PostsPage;
