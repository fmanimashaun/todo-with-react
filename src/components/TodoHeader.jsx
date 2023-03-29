import React from 'react';
import styles from 'assets/scss/TodoHeader.module.scss';

const TodoHeader = () => (
  <section
    style={{
      padding: '20px 0',
      lineHeight: '1.5em',
      color: '#aeadad',
      textAlign: 'center',
    }}
    className={styles['todo-header']}
  >
    <h1>todos</h1>
    <p>Items will persist in the browser local storage</p>
  </section>
);

export default TodoHeader;
