import React from 'react';
import useForm from '../../hooks/useForm';

export default function TodoAdd({ handleAddTodo }) {
  const [{ description }, handleFormChange, reset] = useForm({
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo)

    reset();
  };

  return (
    <>
      <h4>Agregar Todo</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='description' className='form-label'>
            Description
          </label>
          <input
            type='text'
            name='description'
            placeholder='aprender...'
            autoComplete='off'
            className='form-control'
            onChange={handleFormChange}
            value={description}
          />
        </div>
        <div className='d-grid gap-2'>
          <button type='submit' className='btn btn-outline-primary d-md-block'>
            Agregar
          </button>
        </div>
      </form>
    </>
  );
}
