import React, {useState} from 'react';
import './App.css';
import UsersProvider from "./context/usersContext";
import {RootComponent} from "./components/RootComponent";
import {BrowserRouter} from "react-router-dom";

function App() {
  const [greeting] = useState('Hello from ');
  
  return (
      <div className="App">
        <BrowserRouter>
          <UsersProvider>
              <RootComponent greeting={greeting} />
          </UsersProvider>
        </BrowserRouter>
      </div>
  );
}

export default App;
