import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a task title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters'],
  },
  category: {
    type: String,
    required: [true, 'Please provide a category'],
    enum: {
      values: ['Work', 'Personal', 'Study', 'Health', 'Shopping'],
      message: '{VALUE} is not a valid category',
    },
    default: 'Work',
  },
  priority: {
    type: String,
    required: [true, 'Please provide a priority'],
    enum: {
      values: ['Low', 'Medium', 'High'],
      message: '{VALUE} is not a valid priority',
    },
    default: 'Medium',
  },
  completed: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
    validate: {
      validator: function (date) {
        return !date || date >= new Date().setHours(0, 0, 0, 0);
      },
      message: 'Due date cannot be in the past',
    },
  },
  completedAt: {
    type: Date,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
}, {
  timestamps: true,
});

// Index for faster queries
taskSchema.index({ userId: 1, createdAt: -1 });
taskSchema.index({ userId: 1, dueDate: 1 });
taskSchema.index({ userId: 1, priority: 1 });
taskSchema.index({ userId: 1, category: 1 });

// Middleware to set completedAt when task is marked as completed
taskSchema.pre('save', function (next) {
  if (this.isModified('completed')) {
    if (this.completed) {
      this.completedAt = new Date();
    } else {
      this.completedAt = undefined;
    }
  }
  next();
});

// Virtual for checking if task is overdue
taskSchema.virtual('isOverdue').get(function () {
  return this.dueDate && !this.completed && new Date() > this.dueDate;
});

// Include virtuals when converting to JSON
taskSchema.set('toJSON', { virtuals: true });

const Task = mongoose.model('Task', taskSchema);

export default Task;