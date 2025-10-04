# Task Management System

A full-stack task management application built with React.js, Node.js, Express.js, and MongoDB. Features user authentication, CRUD operations, task filtering, and real-time notifications.

## 🚀 Features

### Core Functionality
- **User Authentication**: JWT-based login/signup system
- **Task Management**: Create, read, update, delete tasks
- **Task Categories**: Organize tasks by Work, Personal, Study, Health, Shopping
- **Priority Levels**: Set task priorities (High, Medium, Low)
- **Due Dates**: Set and track task deadlines
- **Task Completion**: Mark tasks as completed/uncompleted
- **Overdue Detection**: Automatic identification of overdue tasks

### Advanced Features
- **Task Filtering**: Filter by category, priority, completion status
- **Task Sorting**: Sort by due date, priority, or creation date
- **Task Statistics**: Dashboard with completion analytics
- **Responsive Design**: Mobile-first responsive interface
- **Real-time Notifications**: Toast notifications for all actions
- **Data Validation**: Comprehensive input validation
- **Error Handling**: Robust error handling throughout the app

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI framework
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **React Toastify** - Notifications
- **Axios** - HTTP client
- **Lucide React** - Icons
- **Date-fns** - Date utilities

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB Atlas** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt.js** - Password hashing
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger
- **Rate Limiting** - API protection

## 📁 Project Structure

```
task-management-system/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── redux/           # Redux store and slices
│   │   │   ├── slice/       # Redux slices
│   │   │   └── store/       # Store configuration
│   │   └── utils/           # Utility functions
│   ├── public/
│   └── package.json
├── backend/                  # Node.js backend
│   ├── config/              # Configuration files
│   ├── controllers/         # Route controllers
│   ├── middleware/          # Custom middleware
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── utils/               # Utility functions
│   └── package.json
├── API_DOCUMENTATION.md      # API documentation
├── POSTMAN_COLLECTION.json   # Postman collection
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd task-management-system
   ```

2. **Install dependencies for both frontend and backend**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   
   **Backend (.env file in /backend directory):**
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_super_secret_jwt_key
   JWT_EXPIRES_IN=30d
   FRONTEND_URL=http://localhost:5173
   ```

   **Frontend (.env file in /frontend directory):**
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start both frontend (http://localhost:5173) and backend (http://localhost:5000) servers concurrently.

## 📝 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

### Task Endpoints
- `GET /api/tasks` - Get all tasks (with filtering)
- `GET /api/tasks/:id` - Get single task
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `PATCH /api/tasks/:id/toggle` - Toggle task completion
- `DELETE /api/tasks/:id` - Delete task
- `GET /api/tasks/stats` - Get task statistics

### Health Check
- `GET /api/health` - API health check

For detailed API documentation with request/response examples, see [API_DOCUMENTATION.md](./API_DOCUMENTATION.md).

## 🧪 Testing with Postman

Import the `POSTMAN_COLLECTION.json` file into Postman to test all API endpoints. The collection includes:

- Pre-configured requests for all endpoints
- Environment variables for easy testing
- Sample request bodies
- Authentication headers setup

### Postman Setup:
1. Import `POSTMAN_COLLECTION.json`
2. Set environment variables:
   - `BASE_URL`: `http://localhost:5000/api`
   - `TOKEN`: Your JWT token (obtained from login)
   - `TASK_ID`: A valid task ID for testing

## 🔐 Authentication Flow

1. **Register**: Create a new account with name, email, and password
2. **Login**: Authenticate with email and password to receive JWT token
3. **Authorized Requests**: Include JWT token in Authorization header for protected routes
4. **Token Expiry**: Tokens expire after 30 days (configurable)

## 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface with Tailwind CSS
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile
- **Interactive Elements**: Hover states, smooth transitions, and micro-interactions
- **Visual Feedback**: Loading states, success/error messages, and progress indicators
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## 🔧 Configuration Options

### Frontend Configuration
- API base URL configuration
- Toast notification settings
- Redux store configuration
- Routing configuration

### Backend Configuration
- MongoDB connection settings
- JWT configuration
- CORS settings
- Rate limiting
- Security headers
- Request logging

## 🚀 Deployment

### Frontend (Vercel)
1. Build the frontend:
   ```bash
   cd frontend && npm run build
   ```
2. Deploy to Vercel or your preferred hosting platform

### Backend (Heroku/Railway/DigitalOcean)
1. Set production environment variables
2. Deploy to your preferred platform
3. Update CORS settings for production frontend URL

### Environment Variables for Production
Update the environment variables with production values:
- Database URLs
- JWT secrets
- Frontend URLs
- API endpoints

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt with salt rounds
- **Input Validation**: Comprehensive data validation
- **Rate Limiting**: API request rate limiting
- **CORS Protection**: Configured cross-origin policies
- **Security Headers**: Helmet.js security headers
- **Error Handling**: Secure error messages

## 📊 Performance Optimizations

- **Database Indexing**: Optimized MongoDB queries
- **Pagination**: Efficient data loading
- **Code Splitting**: Lazy loading of components
- **Caching**: Strategic API response caching
- **Bundle Optimization**: Minimized JavaScript bundles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🎯 Future Enhancements

- [ ] Real-time collaboration features
- [ ] File attachments for tasks
- [ ] Task comments and activity logs
- [ ] Calendar view integration
- [ ] Email notifications
- [ ] Task templates
- [ ] Bulk task operations
- [ ] Advanced analytics dashboard
- [ ] Team management features
- [ ] API versioning