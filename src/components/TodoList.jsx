import React from 'react';
import TodoItem from './TodoItem';
import { useTodosContext } from './context/TodoContext';

const TodoList = () => {
  const { todos } = useTodosContext();
  return (
    <>
      <ul
        style={{
          padding: '0px',
          margin: '0px',
        }}
      >
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
