import React, {useState} from 'react';
import './App.css';
import {PostContainer} from "./components/post/PostContainer";
import {Posts} from "./components/posts/Posts";
import {IUserData} from "./components/post/types";
import AppProvider from "./context/appContext";

function App() {
  
  return (
    <AppProvider>
      <div className="App">
        <div className="flex m-auto w-full md:w-4/5 sm:w-10/12">
          <Posts />
          {/*<PostContainer postId={'1'} />*/}
        </div>
      </div>
    </AppProvider>

  );
}

export default App;
