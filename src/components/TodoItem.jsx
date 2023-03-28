import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo }) => <li>{todo.title}</li>;

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoItem;
