import React from 'react';
import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';
import { format, isAfter, isBefore } from 'date-fns';

const TaskList = () => {
  const { tasks, loading, filters } = useSelector((state) => state.tasks);

  const getFilteredAndSortedTasks = () => {
    let filteredTasks = [...tasks];

    // Filter by category
    if (filters.category !== 'all') {
      filteredTasks = filteredTasks.filter(task => task.category === filters.category);
    }

    // Filter by priority
    if (filters.priority !== 'all') {
      filteredTasks = filteredTasks.filter(task => task.priority === filters.priority);
    }

    // Sort tasks
    filteredTasks.sort((a, b) => {
      switch (filters.sortBy) {
        case 'dueDate':
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return new Date(a.dueDate) - new Date(b.dueDate);
        case 'priority':
          const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'created':
          return new Date(b.createdAt) - new Date(a.createdAt);
        default:
          return 0;
      }
    });

    return filteredTasks;
  };

  const filteredTasks = getFilteredAndSortedTasks();

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (filteredTasks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-lg mb-2">No tasks found</div>
        <p className="text-gray-500 text-sm">
          {tasks.length === 0 
            ? "Create your first task to get started!" 
            : "Try adjusting your filters to see more tasks."
          }
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">
          Tasks ({filteredTasks.length})
        </h2>
      </div>
      <div className="grid gap-4">
        {filteredTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;