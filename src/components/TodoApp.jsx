import React from 'react';
import Header from './Header';
import TodoLogic from './TodoLogic';
import PageHeader from './PageHeader';
import Modal from './Modal';

const TodoApp = () => (
  <>
    <PageHeader />
    <Header />
    <TodoLogic />
    <Modal />
  </>
);

export default TodoApp;
