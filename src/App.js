import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
// import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/user/:userId" element={<FriendDetail />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
