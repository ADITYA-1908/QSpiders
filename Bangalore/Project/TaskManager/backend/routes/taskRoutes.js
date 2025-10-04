import express from 'express';
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  getTaskStats,
  toggleTaskComplete,
  updateTask,
} from '../controllers/taskController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Apply auth middleware to all routes
router.use(auth);

// @route   GET /api/tasks/stats
// @desc    Get task statistics
router.get('/stats', getTaskStats);

// @route   GET /api/tasks
// @desc    Get all tasks for the authenticated user
router.get('/', getTasks);

// @route   GET /api/tasks/:id
// @desc    Get a specific task
router.get('/:id', getTask);

// @route   POST /api/tasks
// @desc    Create a new task
router.post('/', createTask);

// @route   PUT /api/tasks/:id
// @desc    Update a task
router.put('/:id', updateTask);

// @route   PATCH /api/tasks/:id/toggle
// @desc    Toggle task completion status
router.patch('/:id/toggle', toggleTaskComplete);

// @route   DELETE /api/tasks/:id
// @desc    Delete a task
router.delete('/:id', deleteTask);

export default router;