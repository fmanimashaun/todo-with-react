import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({
  todos,
  handleCheck,
  delTodo,
  setUpdate,
}) => (
  <>
    <ul
      style={{
        padding: '0px',
        margin: '0px',
      }}
    >
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleCheck={handleCheck}
          delTodo={delTodo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  </>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  handleCheck: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoList;
