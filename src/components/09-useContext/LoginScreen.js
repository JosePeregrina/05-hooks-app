import React, { useContext } from 'react';
import { UserContext } from './Usercontext';

export default function LoginScreen() {
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Login Screen</h1>
      <hr />
      <button
        className='btn btn-primary'
        onClick={() => setUser({ id: 434, name: 'José Luis' })}>
        Login
      </button>
    </div>
  );
}
