import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todoitem }) => (
  <li>
    <input type="checkbox" checked={todoitem.completed} />
    {todoitem.title}
  </li>
);

TodoItem.propTypes = {
  todoitem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoItem;
