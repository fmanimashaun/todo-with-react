import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/scss/styles.scss';
import TodoApp from 'components/TodoApp';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <TodoApp />
    </Router>
  </React.StrictMode>,
);
