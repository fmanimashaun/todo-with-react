import React from 'react';
import TodoHeader from 'components/TodoHeader';
import TodoLogic from 'components/TodoLogic';

const Home = () => (
  <div className="wrapper">
    <div className="todos">
      <TodoHeader />
      <TodoLogic />
    </div>
  </div>
);

export default Home;
