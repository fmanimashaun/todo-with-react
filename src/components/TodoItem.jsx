import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, handleCheck, delTodo }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => handleCheck(todo.id)}
    />
    <button type="button" onClick={() => delTodo(todo.id)}>
      Delete
    </button>
    {todo.title}
  </li>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleCheck: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
