import React from 'react';
import TodoHeader from './TodoHeader';
import TodoLogic from './TodoLogic';
import PageHeader from './PageHeader';

const TodoApp = () => (
  <>
    <PageHeader />
    <div className="wrapper">
      <div className="todos">
        <TodoHeader />
        <TodoLogic />
      </div>
    </div>
  </>
);

export default TodoApp;
