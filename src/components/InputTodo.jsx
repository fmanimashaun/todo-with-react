import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

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
      <form onSubmit={handleSubmit} className="form-container">
        <input
          className="input-text"
          type="text"
          placeholder="Add Todo..."
          value={description}
          onChange={handleChange}
        />
        <button className="input-submit" type="submit">
          <FaPlusCircle
            style={{
              color: '#5e5e5e',
              fontSize: '20px',
              marginTop: '2px',
            }}
          />
        </button>
      </form>
      {error && <p className="submit-wraning">Please enter a todo</p>}
    </>
  );
};

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default InputTodo;
