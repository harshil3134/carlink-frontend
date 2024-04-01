import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createContext, useState } from "react"
import {
  BrowserRouter ,Route, Routes
     
  }
from 'react-router-dom';

export const Context = createContext({
  isAuthorized: false,
});



const AppWrapper = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
 
  const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{
        isAuthorized,
        setIsAuthorized,
        user,
        setUser,
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(

     <AppWrapper />
      

  //  <React.StrictMode>
   
  //  </React.StrictMode>,
)
