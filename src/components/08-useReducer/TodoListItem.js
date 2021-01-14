import React from 'react';
import PropTypes from 'prop-types';

function TodoListItem({ todo, index, handleDelete, handleToggle }) {
  const { id, desc, done } = todo;
  return (
    <li className='list-group-item'>
      <p className={`${done && 'complete'}`} onClick={() => handleToggle(id)}>
        {' '}
        {index + 1} - {desc}{' '}
      </p>
      <button className='btn btn-danger ms-3' onClick={() => handleDelete(id)}>
        Borrar
      </button>
    </li>
  );
}

export default TodoListItem;

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
