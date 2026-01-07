import React, { useState, useEffect } from 'react';
import { Trash2, Sun, Moon } from 'lucide-react';

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodoText, setNewTodoText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load/Save Dark Mode preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setIsDarkMode(JSON.parse(savedMode));
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  // Sync todos to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Apply/Sync Dark Mode to HTML element
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodoText.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: newTodoText.trim(),
    };

    setTodos([...todos, newTodo]);
    setNewTodoText('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 p-4">
      
      {/* Header and Dark Mode Toggle */}
      <header className="flex justify-between items-center max-w-lg mx-auto mb-8 pt-4">
        <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">
          AI Todo List
        </h1>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </header>

      <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-6">
        
        {/* Input Form */}
        <form onSubmit={addTodo} className="mb-6 flex space-x-2">
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
          />
          <button
            type="submit"
            className="px-4 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 disabled:opacity-50"
            disabled={newTodoText.trim() === ''}
          >
            Add
          </button>
        </form>

        {/* Todo List */}
        <ul className="space-y-3">
          {todos.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 italic py-4">
              No tasks yet. Start adding!
            </p>
          ) : (
            todos.map(todo => (
              <li
                key={todo.id}
                className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 border-indigo-600 dark:border-indigo-400 shadow-md"
              >
                <span className="text-gray-800 dark:text-gray-200 break-words pr-2">
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="p-1 text-red-500 hover:text-red-700 dark:hover:text-red-400 transition duration-150 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500/50"
                  aria-label={`Delete task: ${todo.text}`}
                >
                  <Trash2 size={20} />
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
      
      <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        Built with React, Vite, and Tailwind CSS.
      </footer>
    </div>
  );
};

export default TodoApp;
