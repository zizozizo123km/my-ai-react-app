import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-6 shadow-lg rounded-lg overflow-hidden">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
        className="flex-grow p-4 text-lg border-none outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300 transition-colors duration-300"
      />
      <button
        type="submit"
        className="px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition duration-300 disabled:opacity-50"
        disabled={!input.trim()}
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;