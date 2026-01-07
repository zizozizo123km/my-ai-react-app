import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { Sun, Moon } from 'lucide-react';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [
      { id: 1, text: "Build the modern Todo App", completed: false },
      { id: 2, text: "Implement Dark Mode with Tailwind CSS", completed: false }
    ];
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize dark mode based on system preference or saved setting
    if (localStorage.getItem('theme') === 'dark') return true;
    if (localStorage.getItem('theme') === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Effect to manage localStorage for todos
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Effect to manage Dark Mode class on the HTML element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 p-4 sm:p-8">
      <div className="max-w-xl mx-auto">
        
        {/* Header and Dark Mode Toggle */}
        <header className="flex justify-between items-center mb-8 pt-4">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white tracking-tight">
            Modern Todo List
          </h1>
          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 hover:ring-2 ring-indigo-500 transition duration-300"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </header>

        {/* Todo Input Form */}
        <TodoForm addTodo={addTodo} />

        {/* Todo List */}
        <div className="space-y-3">
          {todos.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 mt-10 text-lg italic">
              No tasks yet! Start adding some productivity boosters.
            </p>
          ) : (
            todos.map(todo => (
              <TodoItem 
                key={todo.id} 
                todo={todo} 
                deleteTodo={deleteTodo} 
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;