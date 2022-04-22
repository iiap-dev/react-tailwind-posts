import React, {useState} from 'react';
import './App.css';
import {PostContainer} from "./components/post/PostContainer";
import {Posts} from "./components/posts/Posts";
import {IUserData} from "./components/post/types";

function App() {
  
  return (
    <div className="App">
      <div className="flex m-auto w-full md:w-4/5 sm:w-10/12">
        <Posts />
      </div>
    </div>
  );
}

export default App;
