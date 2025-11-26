# Portfolio Frontend

A modern, responsive portfolio website built with React, featuring Apple Design aesthetics. This application showcases projects, blog posts, and provides a complete content management system.

## 🚀 Live Sites

- **Frontend:** [https://frontend-ay45q7l17-278389127389sadsas-projects.vercel.app](https://frontend-ay45q7l17-278389127389sadsas-projects.vercel.app)
- **Backend API:** [https://backend-ob244487r-dsadas-projects-99e7ef69.vercel.app](https://backend-ob244487r-dsadas-projects-99e7ef69.vercel.app)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)

## 🎯 Overview

This portfolio website features a clean, minimalist design inspired by Apple's Human Interface Guidelines. It provides a full-featured platform for showcasing projects, writing blog posts, and managing content through an admin interface.

The application is fully responsive and supports both light and dark modes based on system preferences.

## ✨ Features

### Public Features
- **🏠 Home Page:** Beautiful landing page with smooth animations
- **📁 Projects Showcase:** Grid layout displaying all projects with descriptions and links
- **📝 Blog System:** Browse and read blog posts with Markdown support
- **💬 Comments:** Interactive comment system for blog posts
- **📧 Contact Form:** Easy-to-use contact form for visitor inquiries
- **🌓 Dark Mode:** Automatic dark/light mode based on system preferences

### Authentication Features
- **🔐 User Registration:** Create new accounts
- **🔑 User Login:** Secure JWT-based authentication
- **👤 User Profile:** View user information

### Admin Features (Protected)
- **📊 Dashboard:** Overview of all content
- **➕ Create Projects:** Add new projects with images and links
- **✏️ Edit Projects:** Update existing project information
- **🗑️ Delete Projects:** Remove projects from portfolio
- **📝 Create Blog Posts:** Write new blog posts with rich text
- **✏️ Edit Blog Posts:** Modify existing blog content
- **🗑️ Delete Blog Posts:** Remove blog posts

## 🛠 Tech Stack

- **Framework:** React 18.2.0
- **Routing:** React Router DOM 6.16.0
- **HTTP Client:** Axios
- **State Management:** React Context API
- **Styling:** CSS3 with Apple Design System
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API running (see [Backend README](../backend/README.md))

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
REACT_APP_API_URL=http://localhost:5001
```

**Important:** The backend API runs on port 5001 by default. Make sure your backend server is running before starting the frontend.

4. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

### Connecting to the Backend API

The frontend connects to the backend API through the `REACT_APP_API_URL` environment variable.

**Development (Local Backend):**
```env
REACT_APP_API_URL=http://localhost:5001
```

**Production (Deployed Backend):**
```env
REACT_APP_API_URL=https://backend-ob244487r-dsadas-projects-99e7ef69.vercel.app
```

The API base URL is configured in the Axios instance and Context providers throughout the application.

### Test Account

For testing the admin features, use these credentials:
- **Email:** `111111@qq.com`
- **Password:** `111111`

## 📁 Project Structure

```
frontend/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.js    # Navigation header
│   │   ├── Footer.js    # Site footer
│   │   ├── BlogPostCard.js
│   │   └── ProjectCard.js
│   ├── context/         # React Context providers
│   │   └── AuthContext.js
│   ├── pages/           # Page components
│   │   ├── Home.js
│   │   ├── Projects.js
│   │   ├── Blog.js
│   │   ├── BlogDetail.js
│   │   ├── Contact.js
│   │   ├── Auth.js      # Login/Register
│   │   └── Admin.js     # Admin dashboard
│   ├── App.js           # Main app component
│   ├── App.css          # Global styles
│   └── index.js         # Entry point
├── .env                 # Environment variables
└── package.json         # Dependencies
```

## 🎨 Design System

The application uses a custom Apple-inspired design system with:

### Colors
- **Primary Blue:** `#007AFF`
- **Gray Scale:** Multiple shades for light/dark modes
- **Success Green:** `#34C759`
- **Error Red:** `#FF3B30`
- **Warning Orange:** `#FF9500`

### Typography
- **System Fonts:** SF Pro Text, Helvetica Neue
- **Font Sizes:** 12px - 96px (responsive)
- **Line Heights:** 1.05 - 1.47059
- **Letter Spacing:** -0.022em to 0.011em

### Components
- **Cards:** Rounded corners (12-18px), subtle shadows
- **Buttons:** Three variants (primary, secondary, outline)
- **Forms:** Clean inputs with focus states
- **Animations:** Smooth cubic-bezier transitions

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy to production:
```bash
vercel --prod
```

### Environment Variables on Vercel

Make sure to set the `REACT_APP_API_URL` environment variable in your Vercel project settings:

1. Go to your project on Vercel
2. Navigate to Settings → Environment Variables
3. Add `REACT_APP_API_URL` with your backend API URL
4. Redeploy the application

## 📱 Routes

| Route | Description | Auth Required |
|-------|-------------|---------------|
| `/` | Home page | No |
| `/projects` | Projects showcase | No |
| `/blog` | Blog list | No |
| `/blog/:id` | Blog post detail | No |
| `/contact` | Contact form | No |
| `/login` | User login | No |
| `/register` | User registration | No |
| `/admin` | Admin dashboard | Yes |

## 🔐 Authentication

The application uses JWT-based authentication:

1. User logs in through `/login`
2. Receives JWT token from backend
3. Token stored in localStorage
4. Token included in Authorization header for protected requests
5. AuthContext provides authentication state throughout app

Protected routes automatically redirect to login if user is not authenticated.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ using React and Apple Design principles
