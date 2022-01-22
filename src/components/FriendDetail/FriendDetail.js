import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';

const FriendDetail = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [])
  // console.log(user);
  // const { name, email, phone } = user;
  return (
    <>
      <Header></Header>
      <main>
        <div className="box">
          <h3>Friend Details</h3>
          <hr />
          <h4>Name: { user.name }</h4>
          <h6>Email: { user.email }</h6>
          <h6>Phone: {user.phone}</h6>
          <a href={`//${user.website}`} target="_blank" rel="noreferrer"><button>Website</button></a>
        </div>
      </main>
    </>
  );
};

export default FriendDetail;