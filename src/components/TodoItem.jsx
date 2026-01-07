import React from 'react';
import { Trash2 } from 'lucide-react';

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-3 rounded-lg bg-white dark:bg-gray-800 shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:shadow-lg">
      <span className="text-lg text-gray-800 dark:text-gray-200 break-words flex-1 pr-4">
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="p-2 text-red-500 hover:text-red-700 dark:hover:text-red-400 transition duration-200 rounded-full hover:bg-red-100 dark:hover:bg-gray-700"
        aria-label={`Delete task: ${todo.text}`}
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default TodoItem;