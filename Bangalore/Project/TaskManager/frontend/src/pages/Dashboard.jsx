import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../redux/slice/taskSlice';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import TaskFilters from '../components/TaskFilters';
import TaskStats from '../components/TaskStats';
import { Plus } from 'lucide-react';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [showTaskForm, setShowTaskForm] = useState(false);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}!
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage your tasks and stay productive
          </p>
        </div>

        <TaskStats />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-1">
            <TaskFilters />
            <button
              onClick={() => setShowTaskForm(true)}
              className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="h-5 w-5" />
              Add New Task
            </button>
          </div>
          <div className="lg:col-span-3">
            <TaskList />
          </div>
        </div>

        {showTaskForm && (
          <TaskForm 
            onClose={() => setShowTaskForm(false)} 
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;