import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleCheck, delTodo }) => (
  <>
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleCheck={handleCheck} delTodo={delTodo} />
      ))}
    </ul>
  </>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  handleCheck: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoList;
