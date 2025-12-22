# Drive

A secure file storage web application built with Node.js, Express.js, and Firebase Storage. Users can register, login, upload files, and download their stored files with JWT-based authentication.

## Features

- User registration and login with validation
- Secure file upload to Firebase Storage
- File download with signed URLs
- JWT-based authentication middleware
- Password hashing with bcrypt
- Input validation with express-validator
- Responsive EJS templates for UI

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Storage**: Firebase Storage
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer with Firebase Storage integration
- **Templating**: EJS
- **Validation**: express-validator
- **Security**: bcrypt for password hashing, cookie-parser for session management
- **Environment**: dotenv for configuration

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Firebase project with Storage enabled

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd drive
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Environment Setup

1. Create a `.env` file in the root directory with the following variables:
   ```
   MONGO_URI=mongodb://localhost:27017/drive
   JWT_SECRET=your_jwt_secret_key_here
   ```

2. Set up Firebase:
   - Create a Firebase project at https://console.firebase.google.com/
   - Enable Firebase Storage
   - Generate a service account key (JSON file)
   - Place the service account JSON file in the root directory as `drive-86b9f-firebase-adminsdk-fbsvc-4f97aae87b.json` (or update the path in config files)

## Usage

1. Start the application:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`

3. Register a new account or login with existing credentials

4. Upload files from the home page

5. Download files using the provided links

## API Endpoints

### User Routes (`/user`)
- `GET /user/register` - Render registration page
- `POST /user/register` - Register a new user
- `GET /user/login` - Render login page
- `POST /user/login` - Login user and set JWT token

### Index Routes (`/`)
- `GET /home` - Render home page with user's files (requires authentication)
- `POST /upload` - Upload a file (requires authentication)
- `GET /download/:path` - Download a file (requires authentication)

## Project Structure

```
drive/
├── config/
│   ├── db.js              # MongoDB connection
│   ├── firebase.config.js # Firebase initialization
│   └── multer.config.js   # Multer configuration for Firebase Storage
├── middlewares/
│   └── auth.js            # JWT authentication middleware
├── models/
│   ├── user.model.js      # User schema
│   └── files.model.js     # File schema
├── routes/
│   ├── index.routes.js    # Main application routes
│   └── user.routes.js     # User authentication routes
├── views/
│   ├── index.ejs          # Landing page
│   ├── login.ejs          # Login page
│   ├── register.ejs       # Registration page
│   └── home.ejs           # User dashboard
├── app.js                 # Main application file
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables (create this)
└── README.md              # Project documentation
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

