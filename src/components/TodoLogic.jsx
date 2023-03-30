import React from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import { TodosProvider } from './context/TodoContext';

const TodoLogic = () => (
  <TodosProvider>
    <InputTodo />
    <TodoList />
  </TodosProvider>
);

export default TodoLogic;
