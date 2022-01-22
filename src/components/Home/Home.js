import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setFriends(data))
  }, [])

  return (
    <>
      <Header></Header>
      <main>
        <h1>Total Friends: {friends.length}</h1>
        {
          friends.map(friend => <Friend friend={friend} key={friend.id} />)
        }
        </main>
    </>
  );
};

export default Home;