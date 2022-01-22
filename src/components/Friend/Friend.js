import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
  const { id, name, email } = props.friend;
  const friendStyle = {
    border: '1px solid red',
    margin: '20px',
    padding: '20px',
    borderRadius: '10px'
  }
  return (
    <div style={friendStyle}>
      <h2>Name: { name }</h2>
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
      <p><Link to={`/user/${id}`}><button>Get Details</button></Link></p>
    </div>
  );
};

export default Friend;