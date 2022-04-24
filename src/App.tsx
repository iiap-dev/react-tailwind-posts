import React, {useState} from 'react';
import './App.css';
import AppProvider from "./context/appContext";
import {Posts} from "./components/post-content/Posts";

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
