import Task from '../models/Task.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { AppError } from '../utils/AppError.js';

// @desc    Get all tasks for authenticated user
// @route   GET /api/tasks
// @access  Private
export const getTasks = asyncHandler(async (req, res) => {
  const { category, priority, completed, sortBy = 'createdAt' } = req.query;
  
  // Build filter object
  const filter = { userId: req.user.id };
  
  if (category && category !== 'all') {
    filter.category = category;
  }
  
  if (priority && priority !== 'all') {
    filter.priority = priority;
  }
  
  if (completed !== undefined) {
    filter.completed = completed === 'true';
  }

  // Build sort object
  let sort = {};
  switch (sortBy) {
    case 'dueDate':
      sort = { dueDate: 1, createdAt: -1 };
      break;
    case 'priority':
      sort = { priority: -1, createdAt: -1 };
      break;
    case 'title':
      sort = { title: 1 };
      break;
    default:
      sort = { createdAt: -1 };
  }

  const tasks = await Task.find(filter).sort(sort);

  res.status(200).json(tasks);
});

// @desc    Get single task
// @route   GET /api/tasks/:id
// @access  Private
export const getTask = asyncHandler(async (req, res) => {
  const task = await Task.findOne({ 
    _id: req.params.id, 
    userId: req.user.id 
  });

  if (!task) {
    throw new AppError('Task not found', 404);
  }

  res.status(200).json(task);
});

// @desc    Create new task
// @route   POST /api/tasks
// @access  Private
export const createTask = asyncHandler(async (req, res) => {
  const { title, description, category, priority, dueDate } = req.body;

  // Validate required fields
  if (!title || !category || !priority) {
    throw new AppError('Please provide title, category, and priority', 400);
  }

  const task = await Task.create({
    title,
    description,
    category,
    priority,
    dueDate: dueDate ? new Date(dueDate) : undefined,
    userId: req.user.id,
  });

  res.status(201).json(task);
});

// @desc    Update task
// @route   PUT /api/tasks/:id
// @access  Private
export const updateTask = asyncHandler(async (req, res) => {
  const { title, description, category, priority, dueDate } = req.body;

  let task = await Task.findOne({ 
    _id: req.params.id, 
    userId: req.user.id 
  });

  if (!task) {
    throw new AppError('Task not found', 404);
  }

  // Update fields
  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (category !== undefined) task.category = category;
  if (priority !== undefined) task.priority = priority;
  if (dueDate !== undefined) {
    task.dueDate = dueDate ? new Date(dueDate) : undefined;
  }

  await task.save();

  res.status(200).json(task);
});

// @desc    Toggle task completion status
// @route   PATCH /api/tasks/:id/toggle
// @access  Private
export const toggleTaskComplete = asyncHandler(async (req, res) => {
  const { completed } = req.body;

  const task = await Task.findOne({ 
    _id: req.params.id, 
    userId: req.user.id 
  });

  if (!task) {
    throw new AppError('Task not found', 404);
  }

  task.completed = completed !== undefined ? completed : !task.completed;
  await task.save();

  res.status(200).json(task);
});

// @desc    Delete task
// @route   DELETE /api/tasks/:id
// @access  Private
export const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findOne({ 
    _id: req.params.id, 
    userId: req.user.id 
  });

  if (!task) {
    throw new AppError('Task not found', 404);
  }

  await Task.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: 'Task deleted successfully',
  });
});

// @desc    Get task statistics
// @route   GET /api/tasks/stats
// @access  Private
export const getTaskStats = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const stats = await Task.aggregate([
    { $match: { userId: userId } },
    {
      $group: {
        _id: null,
        total: { $sum: 1 },
        completed: { $sum: { $cond: ['$completed', 1, 0] } },
        pending: { $sum: { $cond: ['$completed', 0, 1] } },
        overdue: {
          $sum: {
            $cond: [
              {
                $and: [
                  { $ne: ['$completed', true] },
                  { $ne: ['$dueDate', null] },
                  { $lt: ['$dueDate', new Date()] }
                ]
              },
              1,
              0
            ]
          }
        }
      }
    }
  ]);

  const result = stats[0] || {
    total: 0,
    completed: 0,
    pending: 0,
    overdue: 0
  };

  // Get category breakdown
  const categoryStats = await Task.aggregate([
    { $match: { userId: userId } },
    {
      $group: {
        _id: '$category',
        count: { $sum: 1 },
        completed: { $sum: { $cond: ['$completed', 1, 0] } }
      }
    }
  ]);

  // Get priority breakdown
  const priorityStats = await Task.aggregate([
    { $match: { userId: userId } },
    {
      $group: {
        _id: '$priority',
        count: { $sum: 1 },
        completed: { $sum: { $cond: ['$completed', 1, 0] } }
      }
    }
  ]);

  res.status(200).json({
    overview: result,
    categories: categoryStats,
    priorities: priorityStats
  });
});