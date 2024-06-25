import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home.jsx";
import Chat from "./Components/Chat.jsx";
import Layout from './Layout.jsx';
import { ChatProvider } from './Context/chatContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ChatProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="chats" element={<Chat />} />
          </Route>
        </Routes>
      </ChatProvider>
    </Router>
  </React.StrictMode>,
);
