import { useState } from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import Home from './Component/Home/Home'
import About from './Component/About/About'
import Portfolio from './Component/Portfolio/Portfolio'
import Contact from './Component/Contact/Contact'

import { createBrowserRouter ,RouterProvider } from "react-router-dom";
import Layout from './Component/Layout/Layout'

function App() {
  const router = createBrowserRouter([
    { path: "" , element: <Layout/> , children:[
      { index: true , element: <Home/> },
      { path: "about" , element: <About/> },
      { path: "portfolio" , element: <Portfolio/> },
      { path: "contact" , element: <Contact/> },
      { path: "*" , element: <div className="min-vh-83 text-black">not-found works!</div> },
        ]}
  ]);
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App
