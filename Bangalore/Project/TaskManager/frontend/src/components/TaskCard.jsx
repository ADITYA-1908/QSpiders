import { format, isBefore, isToday } from 'date-fns';
import { Calendar, Check, CreditCard as Edit, Flag, Tag, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskComplete } from '../redux/slice/taskSlice';
import TaskForm from './TaskForm';

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  const [showEditForm, setShowEditForm] = useState(false);

  const handleToggleComplete = () => {
    dispatch(toggleTaskComplete({
      id: task._id,
      completed: !task.completed
    }));
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(task._id));
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-red-600 bg-red-50 border-red-200';
      case 'Medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Work': return 'bg-blue-100 text-blue-800';
      case 'Personal': return 'bg-purple-100 text-purple-800';
      case 'Study': return 'bg-indigo-100 text-indigo-800';
      case 'Health': return 'bg-green-100 text-green-800';
      case 'Shopping': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDueDateStatus = () => {
    if (!task.dueDate) return null;

    const dueDate = new Date(task.dueDate);
    const now = new Date();

    if (isBefore(dueDate, now) && !isToday(dueDate)) {
      return 'overdue';
    } else if (isToday(dueDate)) {
      return 'today';
    } else if (isBefore(now, dueDate)) {
      return 'upcoming';
    }
  };

  const dueDateStatus = getDueDateStatus();

  return (
    <>
      <div className={`bg-white rounded-lg shadow-sm border-l-4 p-4 hover:shadow-md transition-shadow ${task.completed
        ? 'border-l-green-500 opacity-75'
        : dueDateStatus === 'overdue'
          ? 'border-l-red-500'
          : 'border-l-indigo-500'
        }`}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <button
                onClick={handleToggleComplete}
                className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${task.completed
                  ? 'bg-green-500 border-green-500 text-white'
                  : 'border-gray-300 hover:border-gray-400'
                  }`}
              >
                {task.completed && <Check className="h-3 w-3" />}
              </button>
              <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                {task.title}
              </h3>
            </div>

            {task.description && (
              <p className={`text-sm mb-3 ${task.completed ? 'text-gray-400' : 'text-gray-600'}`}>
                {task.description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className={`inline-flex items-center px-2 py-1 rounded-full font-medium ${getCategoryColor(task.category)}`}>
                <Tag className="h-3 w-3 mr-1" />
                {task.category}
              </span>

              <span className={`inline-flex items-center px-2 py-1 rounded-full font-medium border ${getPriorityColor(task.priority)}`}>
                <Flag className="h-3 w-3 mr-1" />
                {task.priority}
              </span>

              {task.dueDate && (
                <span className={`inline-flex items-center px-2 py-1 rounded-full font-medium ${dueDateStatus === 'overdue'
                  ? 'bg-red-100 text-red-800'
                  : dueDateStatus === 'today'
                    ? 'bg-orange-100 text-orange-800'
                    : 'bg-gray-100 text-gray-800'
                  }`}>
                  <Calendar className="h-3 w-3 mr-1" />
                  {format(new Date(task.dueDate), 'MMM dd, yyyy')}
                  {dueDateStatus === 'overdue' && ' (Overdue)'}
                  {dueDateStatus === 'today' && ' (Today)'}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1 ml-4">
            <button
              onClick={() => setShowEditForm(true)}
              className="p-1 text-gray-400 hover:text-indigo-600 transition-colors"
              title="Edit task"
            >
              <Edit className="h-4 w-4" />
            </button>
            <button
              onClick={handleDelete}
              className="p-1 text-gray-400 hover:text-red-600 transition-colors"
              title="Delete task"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {showEditForm && (
        <TaskForm
          task={task}
          onClose={() => setShowEditForm(false)}
        />
      )}
    </>
  );
};

export default TaskCard;