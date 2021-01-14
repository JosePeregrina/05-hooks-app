import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

export default function TodoList({ todos, handleDelete, handleToggle }) {
  return (
    <ul className='list-group list-group-flush'>
      {todos.map((todo, index) => (
        <TodoListItem
          key={todo.id}
          index={index}
          todo={todo}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};
