import React, { useContext } from 'react';
import { UserContext } from './Usercontext';

export default function HomeScreen() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1>Home Screen</h1>
      <hr />
      <pre>
          {JSON.stringify(user, null, 3)}
      </pre>
    </div>
  );
}
