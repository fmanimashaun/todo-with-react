import React from 'react';
import Header from './Header';
import TodoLogic from './TodoLogic';
import PageHeader from './PageHeader';

const TodoApp = () => (
  <>
    <PageHeader />
    <Header />
    <TodoLogic />
  </>
);

export default TodoApp;
