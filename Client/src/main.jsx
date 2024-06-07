import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements, Routes} from "react-router-dom" ;
import Home from "./Components/Home.jsx"
import Chat from "./Components/Chat.jsx"
import Layout from './Layout.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="chats" element={<Chat />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
