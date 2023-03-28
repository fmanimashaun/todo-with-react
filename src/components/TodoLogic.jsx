import React from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

const TodoLogic = () => {
  const todos = [
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ];

  return (
    <div>
      <InputTodo />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoLogic;
