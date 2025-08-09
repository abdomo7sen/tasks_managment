# Task Management Application

## Description

A simple backend API for managing tasks with user authentication.

## Features

- User Registration and Login
- CRUD operations for tasks
- JWT-based Authentication
- MYSQL database integration

## Technologies Used

- Node.js, Express.js
- Mysql, Sequelize
- JWT, Bcrypt,joi
- dotenv, cors

## Database Schema

### Users Table

- `id`, `username`, `email`, `password`, `created_at`

### Tasks Table

- `id`, `title`, `description`, `status`, `due_date`, `user_id`, `created_at`

## Setup Instructions

npm install
