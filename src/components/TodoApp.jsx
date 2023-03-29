import React from 'react';
import Header from './Header';
import TodoLogic from './TodoLogic';
import PageHeader from './PageHeader';

const TodoApp = () => (
  <>
    <PageHeader />
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodoLogic />
      </div>
    </div>
  </>
);

export default TodoApp;
