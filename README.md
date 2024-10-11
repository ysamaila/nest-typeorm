# NEST-TYPEORM

## Overview
This project is a NEST-TYPEORM application that provides a simple REST API for managing todos. It leverages TypeORM to interact with a PostgreSQL database and Swagger to document and visualize the API routes.

## Features
- Create, retrieve, update, and delete todos.
- Uses TypeORM for database interactions.
- Fully documented with Swagger for easy testing and exploration of API endpoints.
- Follows a modular structure with separation of concerns.

## Technologies
- NestJS: A progressive Node.js framework for building efficient and scalable server-side applications.
- TypeORM: An ORM for TypeScript and JavaScript that provides easy database interaction.
- PostgreSQL: The database used in this project.
- Swagger: A tool for documenting and testing APIs.

Getting Started
Prerequisites
Node.js (v14+)
PostgreSQL (Ensure you have a PostgreSQL instance running and accessible)

## Installation
### 1.  Clone the repository:

```
git clone https://github.com/ysamaila/nest-typeorm.git
Navigate to the project directory:
```

```
cd nest-typeorm
```

### 2.  Install dependencies:
``` 
npm install 
```

### 3. Set up the .env file with your database configuration:
```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=your_username
DATABASE_PASSWORD=your_password
DATABASE_NAME=your_database
```

### 4. Run the application
```
npm run start
```
The API will be available at http://localhost:3000

### 5. Access the Swagger documentation:
Visit http://localhost:3000/api to explore and test the API endpoints through the automatically generated Swagger interface.

## API Endpoints

| HTTP Method | Route         | Description                        |
|-------------|---------------|------------------------------------|
| POST        | /todos         | Create a new todo                  |
| GET         | /todos         | Get all todos                      |
| GET         | /todos/:id     | Get a specific todo by ID          |
| PATCH       | /todos/:id     | Update a specific todo by ID       |
| DELETE      | /todos/:id     | Remove a specific todo by ID       |

## Route Descriptions

| HTTP Method | Route         | Description                                      |
|-------------|---------------|--------------------------------------------------|
| POST        | /todos         | Creates a new todo using the provided data       |
| GET         | /todos         | Retrieves a list of all todos in the system      |
| GET         | /todos/:id     | Fetches a specific todo by its ID                |
| PATCH       | /todos/:id     | Updates a todo's details by its ID               |
| DELETE      | /todos/:id     | Deletes a todo by its ID                         |

## Swagger Documentation

Swagger is enabled for this API to make testing and understanding routes easier.

You can access the Swagger UI by navigating to: `http://localhost:3000/api`

This will provide detailed information about the routes, including the expected request parameters, response formats, and the ability to try out the endpoints directly from the browser.
