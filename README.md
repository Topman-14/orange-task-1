<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Management API</title>
</head>

<body>

    <h1>Task Management API</h1>

    <p>This project implements a simple Task Management API using Express, Prisma, and MongoDB. It provides endpoints for creating, retrieving, updating, and deleting tasks.</p>

    <h2>Getting Started</h2>

    <h3>Prerequisites</h3>

    <ul>
        <li>Node.js installed</li>
        <li>MongoDB server running</li>
        <li>Prisma CLI installed globally: <code>npm install -g prisma</code></li>
    </ul>

    <h3>Installation</h3>

    <ol>
        <li>Clone the repository:</li>
        <code>
            <pre>
                git clone https://github.com/your-username/task-management-api.git
                cd task-management-api
            </pre>
        </code>
        <li>Install dependencies:</li>
        <code>
            <pre>
                npm install
            </pre>
        </code>
        <li>Create a <code>.env</code> file in the project root and set your MongoDB connection URL:</li>
        <code>
            <pre>
                DATABASE_URL=mongodb://your-mongodb-url
            </pre>
        </code>
        <li>Run Prisma migrations to create the database schema:</li>
        <code>
            <pre>
                npx prisma migrate dev
            </pre>
        </code>
        <li>Start the server:</li>
        <code>
            <pre>
                npm start
            </pre>
        </code>
    </ol>

    <p>The server will be running on <a href="http://localhost:3000">http://localhost:3000</a>.</p>

    <h2>API Documentation</h2>

    <h3>Create a Task</h3>

    <ul>
        <li><strong>Endpoint:</strong> <code>POST /tasks</code></li>
        <li><strong>Request Body:</strong></li>
        <code>
            <pre>
                {
                    "title": "Task Title",
                    "description": "Task Description",
                    "status": "In Progress"
                }
            </pre>
        </code>
        <li><strong>Response:</strong></li>
        <code>
            <pre>
                {
                    "id": "generated-task-id",
                    "title": "Task Title",
                    "description": "Task Description",
                    "status": "In Progress",
                    "createdAt": "2023-12-07T15:30:00.000Z"
                }
            </pre>
        </code>
    </ul>

    <h3>Get All Tasks</h3>

    <ul>
        <li><strong>Endpoint:</strong> <code>GET /tasks</code></li>
        <li><strong>Response:</strong></li>
        <code>
            <pre>
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
                    // ... other tasks
                ]
            </pre>
        </code>
    </ul>

    <h3>Get a Specific Task</h3>

    <ul>
        <li><strong>Endpoint:</strong> <code>GET /tasks/:id</code></li>
        <li><strong>Response:</strong></li>
        <code>
            <pre>
                {
                    "id": "task-id",
                    "title": "Task Title",
                    "description": "Task Description",
                    "status": "In Progress",
                    "createdAt": "2023-12-07T15:30:00.000Z"
                }
            </pre>
        </code>
    </ul>

    <h3>Update a Task</h3>

    <ul>
        <li><strong>Endpoint:</strong> <code>PUT /tasks/:id</code></li>
        <li><strong>Request Body:</strong></li>
        <code>
            <pre>
                {
                    "title": "Updated Task Title",
                    "status": "Completed"
                }
            </pre>
        </code>
        <li><strong>Response:</strong></li>
        <code>
            <pre>
                {
                    "id": "task-id",
                    "title": "Updated Task Title",
                    "description": "Task Description",
                    "status": "Completed",
                    "createdAt": "2023-12-07T15:30:00.000Z"
                }
            </pre>
        </code>
    </ul>

    <h3>Delete a Task</h3>

    <ul>
        <li><strong>Endpoint:</strong> <code>DELETE /tasks/:id</code></li>
        <li><strong>Response:</strong></li>
        <code>
            <pre>
                {
                    "message": "Task deleted successfully"
                }
            </pre>
        </code>
    </ul>

    <h2>Contributing</h2>

    <p>Feel free to contribute to this project by opening issues or submitting pull requests. Your feedback and contributions are highly appreciated!</p>

</body>

</html>
