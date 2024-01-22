import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import './index.css';
import App from './App';
import About from './pages/About'
import Contact from './pages/Contact';
import Menu from './pages/Menu';
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/Aboutsec",
      element: <About/>,
    },
    {
      path: "/Contact",
      element: <Contact/>,
    },
    {
      path: "/Menus",
      element: <Menu/>,
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
  
