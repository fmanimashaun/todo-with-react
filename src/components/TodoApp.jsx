import React from 'react';
import Header from './Header';
import TodoLogic from './TodoLogic';
import PageHeader from './PageHeader';
import Modal from './Modal';
import Form from './Form';

const TodoApp = () => (
  <>
    <PageHeader />
    <Header />
    <TodoLogic />
    <Modal />
    <Form />
  </>
);

export default TodoApp;
