import React, {useState} from 'react';
import './App.css';
import UsersProvider from "./context/usersContext";
import {RootComponent} from "./components/RootComponent";
import {BrowserRouter} from "react-router-dom";

function App() {
  
  return (
      <div className="App">
        <BrowserRouter>
          <UsersProvider>
            <RootComponent />
          </UsersProvider>
        </BrowserRouter>
      </div>
  );
}

export default App;
