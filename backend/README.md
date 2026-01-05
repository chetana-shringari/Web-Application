# Backend API

A Node.js backend API for a full-stack web application with user authentication and task management.

## Features

- User registration and login with JWT authentication
- Password hashing with bcrypt
- Task CRUD operations
- Input validation and error handling
- MongoDB database with Mongoose ODM
- CORS support
- Environment variable configuration

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **express-validator** - Input validation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

### Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/your_database_name
   JWT_SECRET=your_super_secret_jwt_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (requires authentication)

### Tasks

- `GET /api/tasks` - Get user's tasks (requires authentication)
- `POST /api/tasks` - Create a new task (requires authentication)
- `PUT /api/tasks/:id` - Update a task (requires authentication)
- `DELETE /api/tasks/:id` - Delete a task (requires authentication)

### Health Check

- `GET /health` - Server health check

## Request/Response Format

All API responses follow this format:

```json
{
  "success": true|false,
  "message": "Response message",
  "data": {...} // or "errors": [...] for validation errors
}
```

## Authentication

Protected routes require a JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Environment Variables

- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT signing

## Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## Error Handling

The API includes comprehensive error handling for:
- Validation errors
- Authentication errors
- Database errors
- Server errors

## Data Models

### User
- `username` (String, required, unique)
- `email` (String, required, unique)
- `password` (String, required, hashed)
- `createdAt` (Date)
- `updatedAt` (Date)

### Task
- `title` (String, required)
- `description` (String, optional)
- `completed` (Boolean, default: false)
- `priority` (String: 'low', 'medium', 'high', default: 'medium')
- `dueDate` (Date, optional)
- `user` (ObjectId, reference to User)
- `createdAt` (Date)
- `updatedAt` (Date)