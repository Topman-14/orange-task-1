# Task Management API

This project implements a simple Task Management API using Express, Prisma, and MongoDB. It provides endpoints for creating, retrieving, updating, and deleting tasks. I also display data from a simple mock server created using JSON-server

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB server running
- Prisma CLI installed globally: `npm install -g prisma`

### Installation

1. Clone the repository:
    ```
    git clone https://github.com/your-username/task-management-api.git
    cd task-management-api
    ```

2. Install dependencies:
    ```
    npm install
    ```

3. Create a `.env` file in the project root and set your MongoDB connection URL. don't forget to include the database and cluster names in the url:
    ```
    DATABASE_URL=mongodb://your-mongodb-url
    ```

4. Run Prisma migrations to create the database schema:
    ```
    npx prisma migrate dev
    ```

5. Start the server:
    ```
    npm start
    ```

The server will be running on [http://localhost:3000](http://localhost:3000).

## API Documentation

### Get All Products

- **Endpoint:** `GET /products`
- **Response:**
  ```json
        [
            {
                "id": 1,
                "name": "Laptop",
                "description": "High-performance laptop with advanced features",
                "price": 1200.99
            },
            {
                "id": 2,
                "name": "Smartphone",
                "description": "Latest smartphone with a powerful camera",
                "price": 799.99
            },
            {
                "id": 3,
                "name": "Wireless Headphones",
                "description": "Noise-canceling wireless headphones for immersive audio",
                "price": 149.99
            },
            {
                "id": 4,
                "name": "4K Smart TV",
                "description": "Ultra HD Smart TV with streaming capabilities",
                "price": 899.99
            },
            {
                "id": 5,
                "name": "Fitness Tracker",
                "description": "Advanced fitness tracker with heart rate monitoring",
                "price": 79.99
            }
        ]
  ```

### Create a Task

- **Endpoint:** `POST /tasks`
- **Request Body:**
  ```json
  {
        "title": "Task Title",
        "description": "Task Description",
        "status": "In Progress"
  }
  ```
- **Response:**
  ```json
  {
        "id": "generated-task-id",
        "title": "Task Title",
        "description": "Task Description",
        "status": "In Progress",
        "createdAt": "2023-12-07T15:30:00.000Z"
  }
  ```

### Get All Tasks

- **Endpoint:** `GET /tasks`
- **Response:**
  ```json
        [
            {
            "id": "task-id-1",
            "title": "Task Title 1",
            "description": "Task Description 1",
            "status": "Completed",
            "createdAt": "2023-12-07T15:30:00.000Z"
        },
        {
            "id": "task-id-2",
            "title": "Task Title 2",
            "description": "Task Description 2",
            "status": "In Progress",
            "createdAt": "2023-12-07T16:45:00.000Z"
        }
        ]
  ```
### Get a Specific Task

- **Endpoint:** `GET /tasks/:id`
- **Response:**
    ```json
            {
                "id": "task-id",
                "title": "Task Title",
                "description": "Task Description",
                "status": "In Progress",
                "createdAt": "2023-12-07T15:30:00.000Z"
            }
    ```
### Update a Task

- **Endpoint:** `PUT /tasks/:id`
- **Request Body:**
    ```json
        {
            "title": "Updated Task Title",
            "description":"Updated description",
            "status": "Completed"
        }
    ```
- **Response:**
    ```json
            {
                "id": "task-id",
                "title": "Updated Task Title",
                "description": "Updated description",
                "status": "Completed",
                "createdAt": "2023-12-07T15:30:00.000Z"
            }
    ```
### Delete a Task

- **Endpoint:** `DELETE /tasks/:id`
- **Response:**
    ```json
            {
                "message": "Task deleted successfully"
            }
    ```