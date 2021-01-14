import React, { useEffect, useReducer } from 'react';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import { todoreducer } from './todoReducer';
import '../effects.css';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export default function TodoApp() {
  const [todos, dispatch] = useReducer(todoreducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const delete_todo = { type: 'DELETE', payload: todoId };
    dispatch(delete_todo);
  };

  const handleToggle = (todoId) => {
    dispatch({ type: 'TOGGLE', payload: todoId });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({ type: 'ADD', payload: newTodo });
  };

  return (
    <div>
      <h1>Todo App</h1>
      <small>( {todos.length} )</small>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className='col-5'>
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
}
