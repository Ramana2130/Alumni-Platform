# 🎓 Alumni Platform

A comprehensive full-stack web application designed to connect and manage alumni networks. Built with modern technologies to provide a seamless experience for alumni engagement, networking, and community building.

## ✨ Features

- **User Authentication & Authorization** - Secure JWT-based authentication system
- **Alumni Directory** - Comprehensive alumni database with search and filtering
- **Interactive Dashboard** - Data visualization with charts and analytics
- **Responsive Design** - Mobile-first approach with dark/light theme support
- **Data Export** - Excel/CSV export functionality
- **Form Management** - Advanced form handling with validation
- **Drag & Drop Interface** - Intuitive user interactions

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **React Router** - Client-side routing
- **Recharts** - Data visualization library
- **Lucide React** - Beautiful icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **TypeScript** - Type-safe server development
- **MySQL2** - MySQL database driver
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload handling

### Development Tools
- **Nodemon** - Development server auto-restart
- **ESLint & Prettier** - Code linting and formatting
- **PostCSS** - CSS processing
- **Cross-env** - Cross-platform environment variables

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MySQL** (v8 or higher)

## 🛠️ Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/Ramana2130/alumni-platform.git
   cd alumni-platform
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Environment Setup**
   Create a `.env` file in the root directory:
   \`\`\`env
   # Database Configuration
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=alumni_platform

   # JWT Configuration
   JWT_SECRET=your_super_secret_jwt_key
   JWT_EXPIRES_IN=7d

   # Server Configuration
   PORT=3000
   NODE_ENV=development
   \`\`\`

4. **Database Setup**
   - Create a MySQL database named `alumni_platform`
   - Run the database migrations (if available)
   - Seed the database with initial data (if available)

5. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Build for production**
   \`\`\`bash
   npm run build
   npm start
   \`\`\`
