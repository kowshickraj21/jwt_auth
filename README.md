## JWT Authentication
Welcome to my JWT Authentication Learning Project! This repository documents my journey in learning and implementing JSON Web Token (JWT) authentication. It's a work-in-progress as I explore different aspects of JWT, understand its mechanisms, and apply it in a simple application.

---
## Introduction
JSON Web Tokens (JWT) are an open, industry-standard method for securely transmitting information between parties as a JSON object. This project serves as a practical approach to understand how JWT works, its advantages, and how to implement it in web applications.
   ### Learning Objectives
   - Understand the basics of JWT and its components.
   - Learn how to generate and validate JWTs.
   - Implement user authentication using JWTs.
   - Protect routes using JWT authentication.
   - Explore refresh tokens and their usage.
   ### Technologies Used
   - **Node.js** - JavaScript runtime environment
   - **Express** - Web framework for Node.js
   - **jsonwebtoken** - JWT library for Node.js
   - **bcrypt** - Library to hash passwords
## Setup and Installation

1. **Clone the repository:**
   ```console
   git clone https://github.com/kowshickraj21/jwt-auth.git
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or if you are using Yarn:
   ```bash
   yarn install
   ```

3. **Set up environment variables:**
   Create a \`.env\` file in the root directory and add the following:
   ```plaintext
   MONGODB_URI = your MongoDB database URL
   ACCESS_SECRET = Your access secret for JWT Auth
   ```

4. **Run the application:**
   ```bash
   npm start
   ```
   or with Nodemon for development:
   ```bash
   npm run dev
   ```
