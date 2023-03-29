import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

const TodoLogic = () => {
  const getInitialTodos = () => {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  };
  const [todos, setTodos] = useState(getInitialTodos());

  const handleCheck = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedDescription, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updatedDescription,
          };
        }
        return todo;
      }),
    );
  };

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodoList
        todos={todos}
        handleCheck={handleCheck}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    </div>
  );
};

export default TodoLogic;
