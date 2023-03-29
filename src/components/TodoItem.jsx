import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, handleCheck }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => handleCheck(todo.id)}
    />
    {todo.title}
  </li>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleCheck: PropTypes.func.isRequired,
};

export default TodoItem;
