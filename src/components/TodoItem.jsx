import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import styles from 'assets/scss/TodoItem.module.scss';

const TodoItem = ({
  todo,
  handleCheck,
  delTodo,
  setUpdate,
}) => {
  const [editing, setEditing] = useState(false);
  const editInputRef = useRef(null);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setUpdate(editInputRef.current.value, todo.id);
      setEditing(false);
    }
  };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const completedStyle = {
    textDecoration: 'line-through',
    color: '#595959',
    opacity: 0.4,
    fontStyle: 'italic',
  };
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleCheck(todo.id)}
        />
        <button type="button" onClick={handleEditing}>
          <AiFillEdit style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>
        <button type="button" onClick={() => delTodo(todo.id)}>
          <BsFillTrashFill style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>
        <span style={todo.completed ? completedStyle : null}>{todo.title}</span>
      </div>
      <input
        type="text"
        ref={editInputRef}
        defaultValue={todo.title}
        className={styles.textInput}
        style={editMode}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleCheck: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
