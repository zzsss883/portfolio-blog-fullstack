# Portfolio Backend API

A RESTful API built with Node.js, Express, and MongoDB for managing a personal portfolio website with projects, blog posts, and contact functionality.

## 🚀 Live API

**Base URL:** `https://backend-ob244487r-dsadas-projects-99e7ef69.vercel.app`

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Environment Variables](#environment-variables)

## ✨ Features

- User authentication with JWT
- CRUD operations for projects and blog posts
- Comment system for blog posts
- Contact form message handling
- Protected routes with middleware
- MongoDB database integration
- RESTful API design

## 🛠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Security:** bcryptjs for password hashing
- **Environment:** dotenv

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

4. Run the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:5001`

### Seeding Test Data

To populate the database with test data:
```bash
node seedData.js
```

**Test Account Credentials:**
- Email: `111111@qq.com`
- Password: `111111`

## 📚 API Endpoints

### Authentication

#### Register User
- **URL:** `/api/users/register`
- **Method:** `POST`
- **Auth Required:** No
- **Body:**
```json
{
  "username": "string (min 3 characters)",
  "email": "string (valid email)",
  "password": "string (min 6 characters)"
}
```
- **Success Response:**
  - **Code:** 201
  - **Content:**
```json
{
  "token": "jwt_token",
  "user": {
    "_id": "user_id",
    "username": "username",
    "email": "email@example.com"
  }
}
```

#### Login User
- **URL:** `/api/users/login`
- **Method:** `POST`
- **Auth Required:** No
- **Body:**
```json
{
  "email": "string",
  "password": "string"
}
```
- **Success Response:**
  - **Code:** 200
  - **Content:**
```json
{
  "token": "jwt_token",
  "user": {
    "_id": "user_id",
    "username": "username",
    "email": "email@example.com"
  }
}
```

---

### Projects

#### Get All Projects
- **URL:** `/api/projects`
- **Method:** `GET`
- **Auth Required:** No
- **Query Parameters:** None
- **Success Response:**
  - **Code:** 200
  - **Content:** Array of project objects

#### Get Single Project
- **URL:** `/api/projects/:id`
- **Method:** `GET`
- **Auth Required:** No
- **URL Parameters:** `id=[string]` - MongoDB ObjectId
- **Success Response:**
  - **Code:** 200
  - **Content:** Project object

#### Create Project
- **URL:** `/api/projects`
- **Method:** `POST`
- **Auth Required:** Yes
- **Headers:** `Authorization: Bearer {token}`
- **Body:**
```json
{
  "title": "string (required)",
  "description": "string (required)",
  "imageUrl": "string (optional)",
  "repoUrl": "string (optional)",
  "liveUrl": "string (optional)"
}
```
- **Success Response:**
  - **Code:** 201
  - **Content:** Created project object

#### Update Project
- **URL:** `/api/projects/:id`
- **Method:** `PUT`
- **Auth Required:** Yes
- **Headers:** `Authorization: Bearer {token}`
- **URL Parameters:** `id=[string]` - MongoDB ObjectId
- **Body:** Same as Create Project (all fields optional)
- **Success Response:**
  - **Code:** 200
  - **Content:** Updated project object

#### Delete Project
- **URL:** `/api/projects/:id`
- **Method:** `DELETE`
- **Auth Required:** Yes
- **Headers:** `Authorization: Bearer {token}`
- **URL Parameters:** `id=[string]` - MongoDB ObjectId
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ message: "Project deleted successfully" }`

---

### Blog Posts

#### Get All Blog Posts
- **URL:** `/api/blog`
- **Method:** `GET`
- **Auth Required:** No
- **Query Parameters:** None
- **Success Response:**
  - **Code:** 200
  - **Content:** Array of blog post objects with author populated

#### Get Single Blog Post
- **URL:** `/api/blog/:id`
- **Method:** `GET`
- **Auth Required:** No
- **URL Parameters:** `id=[string]` - MongoDB ObjectId
- **Success Response:**
  - **Code:** 200
  - **Content:** Blog post object with author populated

#### Create Blog Post
- **URL:** `/api/blog`
- **Method:** `POST`
- **Auth Required:** Yes
- **Headers:** `Authorization: Bearer {token}`
- **Body:**
```json
{
  "title": "string (required)",
  "content": "string (required)"
}
```
- **Success Response:**
  - **Code:** 201
  - **Content:** Created blog post object

#### Update Blog Post
- **URL:** `/api/blog/:id`
- **Method:** `PUT`
- **Auth Required:** Yes (must be post author)
- **Headers:** `Authorization: Bearer {token}`
- **URL Parameters:** `id=[string]` - MongoDB ObjectId
- **Body:**
```json
{
  "title": "string (optional)",
  "content": "string (optional)"
}
```
- **Success Response:**
  - **Code:** 200
  - **Content:** Updated blog post object

#### Delete Blog Post
- **URL:** `/api/blog/:id`
- **Method:** `DELETE`
- **Auth Required:** Yes (must be post author)
- **Headers:** `Authorization: Bearer {token}`
- **URL Parameters:** `id=[string]` - MongoDB ObjectId
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ message: "Blog post deleted successfully" }`

---

### Comments

#### Get Comments for Post
- **URL:** `/api/blog/:postId/comments`
- **Method:** `GET`
- **Auth Required:** No
- **URL Parameters:** `postId=[string]` - Blog post MongoDB ObjectId
- **Success Response:**
  - **Code:** 200
  - **Content:** Array of comment objects with author populated

#### Create Comment
- **URL:** `/api/blog/:postId/comments`
- **Method:** `POST`
- **Auth Required:** Yes
- **Headers:** `Authorization: Bearer {token}`
- **URL Parameters:** `postId=[string]` - Blog post MongoDB ObjectId
- **Body:**
```json
{
  "content": "string (required)"
}
```
- **Success Response:**
  - **Code:** 201
  - **Content:** Created comment object

---

### Contact

#### Send Contact Message
- **URL:** `/api/contact`
- **Method:** `POST`
- **Auth Required:** No
- **Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "message": "string (required)"
}
```
- **Success Response:**
  - **Code:** 201
  - **Content:**
```json
{
  "message": "Message sent successfully"
}
```

---

## 🔐 Authentication

This API uses JWT (JSON Web Tokens) for authentication. Protected routes require a valid JWT token in the Authorization header:

```
Authorization: Bearer {your_jwt_token}
```

To obtain a token:
1. Register a new user via `/api/users/register`
2. Login via `/api/users/login`
3. Use the returned token in subsequent requests

### Protected Routes

Routes that require authentication:
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project
- `POST /api/blog` - Create blog post
- `PUT /api/blog/:id` - Update blog post (requires authorization)
- `DELETE /api/blog/:id` - Delete blog post (requires authorization)
- `POST /api/blog/:postId/comments` - Create comment

**Authorization:** Some routes not only require authentication but also authorization (user must be the resource owner):
- Updating or deleting blog posts requires the user to be the post author

## 🔧 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port number | `5001` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/portfolio` |
| `JWT_SECRET` | Secret key for JWT signing | `your_secret_key` |
| `NODE_ENV` | Environment mode | `development` or `production` |

## 📝 Error Responses

All endpoints may return the following error responses:

### 400 Bad Request
```json
{
  "message": "Error description"
}
```

### 401 Unauthorized
```json
{
  "message": "Not authorized, token failed"
}
```

### 403 Forbidden
```json
{
  "message": "Not authorized to perform this action"
}
```

### 404 Not Found
```json
{
  "message": "Resource not found"
}
```

### 500 Server Error
```json
{
  "message": "Server error description"
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ for portfolio management
