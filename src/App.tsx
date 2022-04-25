import React, {useState} from 'react';
import './App.css';
import UsersProvider from "./context/usersContext";
import {RootComponent} from "./components/RootComponent";

function App() {
  
  return (
      <div className="App">
          <UsersProvider>
            <RootComponent />
          </UsersProvider>
      </div>
  );
}

export default App;
