import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = ({ addTodoItem }) => {
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      addTodoItem(description);
      setDescription('');
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={description}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>Please enter a todo</p>}
    </>
  );
};

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default InputTodo;
