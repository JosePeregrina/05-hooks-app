import React from 'react';
import useForm from '../../hooks/useForm';
import './effects.css';

export default function FormWithCustomHook() {
  const [formState, handleFormChange] = useForm({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = formState;

  const handelSubmit = (e) => {
    e.preventDefault();

    console.log(formState);
  };

  return (
    <form onSubmit={handelSubmit}>
      <h1>Form With CustomHook</h1>
      <hr />

      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Tu nombre'
          autoComplete='off'
          value={name}
          onChange={handleFormChange}
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
          onChange={handleFormChange}
        />
      </div>
      <div className='form-group'>
        <input
          type='password'
          name='password'
          className='form-control'
          value={password}
          onChange={handleFormChange}
        />
      </div>
      <button type='submit' className='btn btn-primary'>Guardar</button>
    </form>
  );
}
