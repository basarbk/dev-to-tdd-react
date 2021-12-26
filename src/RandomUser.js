import axios from 'axios';
import { useState } from 'react';

export default function RandomUser(){

  const [user, setUser] = useState();

  const loadRandomUser = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api')
      setUser(response.data.results[0])
    } catch (error) {
    }
  }

  return (
    <>
      <button onClick={loadRandomUser}>Load Random User</button>
      {user && (
        <h1>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h1>
      )}
    </>
  );
}