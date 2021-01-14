import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export default function Simpleform() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log('Hey');
  }, []);

  useEffect(() => {
    // console.log('El form Cambio');
  }, [formState]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>Use Effect</h1>
      <hr />

      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Tu nombre'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className='form-group'>
        <input
          type='email'
          name='email'
          className='form-control'
          placeholder='email@example.com'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {name === '123' && <Message />}
    </>
  );
}
