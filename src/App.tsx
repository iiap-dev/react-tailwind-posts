import React from 'react';
import './App.css';
import {PostContainer} from "./components/post/PostContainer";

function App() {
  const postId = '100';
  
  return (
    <div className="App">
      <PostContainer postId={postId}  />
    </div>
  );
}

export default App;
