# BlogBytes

## Introduction

**BlogBytes Documentation**

## Overview

This documentation provides a comprehensive guide to the BlogBytes project. BlogBytes is a blogging platform that enables users to create, manage, and share blog posts with an intuitive interface and a robust backend.

## Purpose and Features

- **Create, Edit, and Delete Blog Posts**: Users can manage their blog posts easily with options to create, update, or remove posts.
- **User Authentication and Authorization**: Secure user authentication and authorization to manage user access and permissions.
- **Responsive Design**: A responsive and user-friendly interface that works seamlessly on both desktop and mobile devices.

## Technologies Used

- **React.js** (Frontend): The user interface is built with React.js for a dynamic and responsive experience.
- **Node.js and Express.js** (Backend): The server-side logic and API are handled using Node.js and Express.js.
- **MongoDB** (Data Storage): MongoDB is used for storing and managing data.
- **Firebase** (Image Storage): Firebase is utilized for handling image storage and retrieval.
- **Vercel** (Deployment): The application is deployed using Vercel for efficient hosting and continuous deployment.

## Getting Started

### Prerequisites

Ensure you have the following software installed:

- [Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/omkarsawantt/blogging-website.git
    cd blogging-website
    ```

2. Install dependencies:

    ```bash
    cd client
    npm install
    cd ..
    cd server
    npm install
    ```

### Configuration

1. Set up environment variables for the client side:

    - Create a `.env` file in the `client` directory.
    - Add the following variables:

        ```env
        BACKEND_BASE_URL=your-backend-base-url
        FIREBASE_API_KEY=your-api-key
        FIREBASE_AUTH_DOMAIN=your-auth-domain
        FIREBASE_PROJECT_ID=your-project-id
        FIREBASE_STORAGE_BUCKET=your-storage-bucket
        FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
        FIREBASE_APP_ID=your-app-id
        ```

2. Firebase configuration:

    - Follow the [Firebase setup guide](https://firebase.google.com/docs/web/setup) to create a new project and obtain the necessary credentials.

3. Set up environment variables for the server side:

    - Create a `.env` file in the `server` directory.
    - Add the following variables:

        ```env
        MONGO_URI=your-mongodb-uri
        PORT=port-number-for-running-server
        JWT_SECRET=your-jwt-secret
        DEFAULT_AVATAR_URL=default-avatar-uri
        ```

## Usage

### Running the Project Locally

1. To run the Frontend (React project), use the following command:

    ```bash
    cd client
    npm start
    ```

2. To run the Backend (Node project), use the following command:

    ```bash
    cd server
    node index.js
    ```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

### Deploying to Vercel

1. Push your code to your GitHub repository.
2. Go to [Vercel](https://vercel.com/) and sign up with your GitHub account.
3. Create two projects in Vercel: one for the Frontend and another for the Backend.
4. You can view your deployed project on the domains provided by Vercel.

## API Documentation

### Blog Post Routes

1. **Create a Blog Post**
    - **URL**: `/api/posts`
    - **Method**: `POST`
    - **Request**:
        - **Headers**:
            ```http
            Authorization: Bearer <token>
            ```
        - **Request Options**:
            ```javascript
            withCredentials: true
            ```
        - **Request Data**:
            ```json
            { 
                "title": "Post Title", 
                "category": "Post Category", 
                "description": "Post Description",
                "thumbnail": "Link of the thumbnail of post" 
            }
            ```
    - **Response**:
        ```json
        {
            "_id": "ID of the Post",
            "title": "Post Title",
            "category": "Post Category",
            "description": "Post Description",
            "thumbnail": "Link of the thumbnail of post",
            "creator": "Id of the creator of post",
            "createdAt": "Timestamp",
            "updatedAt": "Timestamp"
        }
        ```

2. **Get Random Posts**
    - **URL**: `/api/posts`
    - **Method**: `GET`
    - **Response**:
        ```json
        [
            {
                "_id": "ID of the Post",
                "title": "Post Title",
                "category": "Post Category",
                "description": "Post Description",
                "thumbnail": "Link of the thumbnail of post",
                "creator": "Id of the creator of post",
                "createdAt": "Timestamp",
                "updatedAt": "Timestamp"
            }
            ...
        ]
        ```

3. **Get Single Post**
    - **URL**: `/api/posts/:id`
    - **Method**: `GET`
    - **Response**:
        ```json
        {
            "_id": "ID of the Post",
            "title": "Post Title",
            "category": "Post Category",
            "description": "Post Description",
            "thumbnail": "Link of the thumbnail of post",
            "creator": "Id of the creator of post",
            "createdAt": "Timestamp",
            "updatedAt": "Timestamp"
        }
        ```

4. **Get Post by Category**
    - **URL**: `/api/posts/:category`
    - **Method**: `GET`
    - **Response**:
        ```json
        [
            {
                "_id": "ID of the Post",
                "title": "Post Title",
                "category": "Post Category",
                "description": "Post Description",
                "thumbnail": "Link of the thumbnail of post",
                "creator": "Id of the creator of post",
                "createdAt": "Timestamp",
                "updatedAt": "Timestamp"
            }
            ...
        ]
        ```

5. **Get Author Posts**
    - **URL**: `/api/posts/users/:id`
    - **Method**: `GET`
    - **Response**:
        ```json
        [
            {
                "_id": "ID of the Post",
                "title": "Post Title",
                "category": "Post Category",
                "description": "Post Description",
                "thumbnail": "Link of the thumbnail of post",
                "creator": "Id of the creator of post",
                "createdAt": "Timestamp",
                "updatedAt": "Timestamp"
            }
            ...
        ]
        ```

6. **Edit Post**
    - **URL**: `/api/posts/:id`
    - **Method**: `PATCH`
    - **Request**:
        - **Headers**:
            ```http
            Authorization: Bearer <token>
            ```
        - **Request Options**:
            ```javascript
            withCredentials: true
            ```
        - **Request Data**:
            ```json
            { 
                "title": "Post Title", 
                "category": "Post Category", 
                "description": "Post Description",
                "thumbnail": "Link of the thumbnail of post" 
            }
            ```
    - **Response**:
        ```json
        {
            "_id": "ID of the Post",
            "title": "Post Title",
            "category": "Post Category",
            "description": "Post Description",
            "thumbnail": "Link of the thumbnail of post",
            "creator": "Id of the creator of post",
            "createdAt": "Timestamp",
            "updatedAt": "Timestamp"
        }
        ```

7. **Delete Post**
    - **URL**: `/api/posts/:id`
    - **Method**: `DELETE`
    - **Response**:
        ```json
        {
            "message": "Post is deleted",
            "success": true
        }
        ```

8. **Get All Titles of Posts**
    - **URL**: `/api/posts/titles`
    - **Method**: `GET`
    - **Response**:
        ```json
        [
            "Title of post",
            ...
        ]
        ```

9. **Get Posts from Search**
    - **URL**: `/api/posts/search`
    - **Method**: `POST`
    - **Request**:
        ```json
        {
            "text": "Text to get posts according to it"
        }
        ```
    - **Response**:
        ```json
        [
            {
                "_id": "ID of the Post",
                "title": "Post Title",
                "category": "Post Category",
                "description": "Post Description",
                "thumbnail": "Link of the thumbnail of post",
                "creator": "Id of the creator of post",
                "createdAt": "Timestamp",
                "updatedAt": "Timestamp"
            }
            ...
        ]
        ```

### User Routes

1. **Register User**
    - **URL**: `/api/users/register`
    - **Method**: `POST`
    - **Request**:
        ```json
        {
            "name": "Name of User",
            "email": "Email of User",
            "password": "Password

 of User",
            "password2": "For Confirming the Password"
        }
        ```
    - **Response**:
        ```json
        {
            "message": "New User 'Your Email address' registered."
        }
        ```

2. **Login User**
    - **URL**: `/api/users/login`
    - **Method**: `POST`
    - **Request**:
        ```json
        {
            "email": "Email of User",
            "password": "Password of User"
        }
        ```
    - **Response**:
        ```json
        {
            "token": "Token for recognizing user after login",
            "id": "ID of User",
            "name": "Name of User"
        }
        ```

3. **Get User Profile**
    - **URL**: `/api/users/:id`
    - **Method**: `GET`
    - **Response**:
        ```json
        {
            "_id": "ID of User",
            "email": "Email of User",
            "avatar": "Avatar link of User",
            "posts": "Number of posts written by this user"
        }
        ```

4. **Get All Users**
    - **URL**: `/api/users`
    - **Method**: `GET`
    - **Response**:
        ```json
        [
            {
                "_id": "ID of User",
                "email": "Email of User",
                "avatar": "Avatar link of User",
                "posts": "Number of posts written by this user"
            }
            ...
        ]
        ```

5. **Change Avatar of User**
    - **URL**: `/api/users/change-avatar`
    - **Method**: `POST`
    - **Request**:
        - **Headers**:
            ```http
            Authorization: Bearer <token>
            ```
        - **Request Options**:
            ```javascript
            withCredentials: true
            ```
        - **Request Data**:
            ```json
            {
                "avatar": "Avatar link of User"
            }
            ```
    - **Response**:
        ```json
        {
            "_id": "ID of User",
            "email": "Email of User",
            "avatar": "Updated Avatar link of User",
            "posts": "Number of posts written by this user"
        }
        ```

6. **Edit User Details**
    - **URL**: `/api/users/edit-user`
    - **Method**: `POST`
    - **Request**:
        - **Headers**:
            ```http
            Authorization: Bearer <token>
            ```
        - **Request Options**:
            ```javascript
            withCredentials: true
            ```
        - **Request Data**:
            ```json
            {
                "name": "Name of User",
                "email": "Email of User",
                "currentPassword": "Current Password of User",
                "newPassword": "New Password of User",
                "newPassword2": "For Confirming the Password"
            }
            ```
    - **Response**:
        ```json
        {
            "_id": "ID of User",
            "email": "Email of User",
            "avatar": "Updated Avatar link of User",
            "posts": "Number of posts written by this user"
        }
        ```

---

## User Guide

### Creating and Managing Blog Posts

- **Create**: Navigate to the "New Post" page, fill in the details, and click "Publish".
- **Edit**: Go to your post, click "Edit", make the changes, and save.
- **Delete**: Go to your post, click "Delete", and confirm.

### User Authentication

- **Register**: Click on "Register", fill in the required information, and submit.
- **Login**: Click on "Login", enter your credentials, and submit.
- **Logout**: Click on "Logout" in the user menu.


---

## Developer Guide

### Project Structure

#### Root

- `client/`
  - `.env`
  - `.gitignore`
  - `README.md`
  - `package-lock.json`
  - `package.json`
  - `public/`
    - `favicon.ico`
    - `index.html`
  - `src/`
    - `firebase.js`
    - `index.js`
    - `index.css`
    - `components/`
      - `Footer.js`
      - `Header.js`
      - `Layout.js`
      - `Loader.js`
      - `PostAuthor.js`
      - `PostItem.js`
      - `Posts.js`
      - `Search.js`
    - `context/`
      - `UserContext.js`
    - `pages/`
      - `Authors.jsx`
      - `AuthorPosts.jsx`
      - `CategoryPost.jsx`
      - `CreatePost.jsx`
      - `Dashboard.jsx`
      - `DeletePost.jsx`
      - `EditPost.jsx`
      - `ErrorPage.jsx`
      - `Home.jsx`
      - `Input.jsx`
      - `Login.jsx`
      - `Logout.jsx`
      - `PostDetail.jsx`
      - `Register.jsx`
      - `SearchPage.jsx`
      - `UserProfile.jsx`

- `server/`
  - `.env`
  - `index.js`
  - `package-lock.json`
  - `package.json`
  - `vercel.json`
  - `controller/`
    - `postControllers.js`
    - `userController.js`
  - `middleware/`
    - `authMiddleware.js`
    - `errorMiddleware.js`
  - `models/`
    - `errorModel.js`
    - `postModel.js`
    - `userModel.js`
  - `routes/`
    - `postsRoutes.js`
    - `userRoutes.js`

---


## Troubleshooting

### Common Issues

- **Cannot connect to Firebase**: Ensure your `.env` file is properly configured with the correct Firebase credentials.
- **Application not starting**: Check for any errors in the console and ensure all dependencies are installed.
- **Deployment issues**: Verify that the Vercel CLI is installed and configured correctly. Follow the prompts and check the Vercel dashboard for logs.

### FAQ

- **How do I reset my password?** Go to the login page and click on "Forgot Password". Follow the instructions to reset your password.
- **Can I use this project for my own blog?** Yes, you can fork the repository and customize it as per your requirements.
- **How do I report a bug?** Open an issue on the project's GitHub page with detailed information about the bug.

---
