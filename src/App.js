import React, { useEffect, useState } from 'react';
import Friend from './components/Friend/Friend';
// import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setFriends(data))
  }, [])
  return (
    <div className="App">
      {
        friends.map(friend => <Friend friend={friend} key={friend.id}></Friend>)
      }
    </div>
  );
}

export default App;
