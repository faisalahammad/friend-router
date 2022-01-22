import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';

const FriendDetail = () => {
  const { userId } = useParams();
  return (
    <>
      <Header></Header>
      <main>
        <h2>Friend Details of: {userId}</h2>
      </main>
    </>
  );
};

export default FriendDetail;