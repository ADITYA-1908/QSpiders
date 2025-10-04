import { isBefore, isToday } from 'date-fns';
import { AlertTriangle, Calendar, CheckCircle, Clock } from 'lucide-react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const TaskStats = () => {
  const { tasks } = useSelector((state) => state.tasks);

  const stats = useMemo(() => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;

    const overdueTasks = tasks.filter(task => {
      if (task.completed || !task.dueDate) return false;
      return isBefore(new Date(task.dueDate), new Date()) && !isToday(new Date(task.dueDate));
    }).length;

    const todayTasks = tasks.filter(task => {
      if (!task.dueDate) return false;
      return isToday(new Date(task.dueDate));
    }).length;

    return {
      total: totalTasks,
      completed: completedTasks,
      pending: pendingTasks,
      overdue: overdueTasks,
      today: todayTasks,
      completionRate: totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0,
    };
  }, [tasks]);

  const statCards = [
    {
      title: 'Total Tasks',
      value: stats.total,
      icon: Calendar,
      color: 'bg-blue-50 text-blue-600',
      textColor: 'text-blue-900',
    },
    {
      title: 'Completed',
      value: stats.completed,
      icon: CheckCircle,
      color: 'bg-green-50 text-green-600',
      textColor: 'text-green-900',
    },
    {
      title: 'Pending',
      value: stats.pending,
      icon: Clock,
      color: 'bg-yellow-50 text-yellow-600',
      textColor: 'text-yellow-900',
    },
    {
      title: 'Overdue',
      value: stats.overdue,
      icon: AlertTriangle,
      color: 'bg-red-50 text-red-600',
      textColor: 'text-red-900',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.title} className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center">
              <div className={`p-2 rounded-lg ${stat.color}`}>
                <Icon className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className={`text-2xl font-semibold ${stat.textColor}`}>
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskStats;