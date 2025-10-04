import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:5000/api/tasks';
// const API_URL = `${import.meta.env.VITE_API_URL}/tasks`;

// Set up axios interceptor to include token
const getAuthConfig = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const initialState = {
  tasks: [],
  loading: false,
  error: null,
  filters: {
    category: 'all',
    priority: 'all',
    sortBy: 'dueDate',
  },
};

// Get all tasks
export const getTasks = createAsyncThunk(
  'tasks/getTasks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL, getAuthConfig());
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to fetch tasks';
      return rejectWithValue(message);
    }
  }
);

// Create task
export const createTask = createAsyncThunk(
  'tasks/createTask',
  async (taskData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, taskData, getAuthConfig());
      toast.success('Task created successfully!');
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to create task';
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

// Update task
export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ id, taskData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, taskData, getAuthConfig());
      toast.success('Task updated successfully!');
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to update task';
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

// Delete task
export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`, getAuthConfig());
      toast.success('Task deleted successfully!');
      return id;
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to delete task';
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

// Toggle task completion
export const toggleTaskComplete = createAsyncThunk(
  'tasks/toggleComplete',
  async ({ id, completed }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${API_URL}/${id}/toggle`,
        { completed },
        getAuthConfig()
      );
      toast.success(`Task ${completed ? 'completed' : 'uncompleted'}!`);
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to toggle task';
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks.push(action.payload);
      })
      .addCase(createTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(task => task._id === action.payload._id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task._id !== action.payload);
      })
      .addCase(toggleTaskComplete.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(task => task._id === action.payload._id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      });
  },
});

export const { setFilters, clearError } = taskSlice.actions;
export default taskSlice.reducer;