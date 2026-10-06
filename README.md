# Student Record Management REST API

A Node.js and Express.js REST API for managing student records with CRUD operations.

## Features

- Add a student
- View all students
- View one student by ID
- Update student information
- Delete a student
- Custom request logger middleware
- Input and ID validation middleware
- Centralized error handling
- JSON request and response format
- In-memory data storage (no database required)

## Project Structure

```text
student-record-api/
├── controllers/
│   └── studentController.js
├── data/
│   └── students.js
├── middleware/
│   ├── errorHandler.js
│   ├── requestLogger.js
│   └── validateStudent.js
├── routes/
│   └── studentRoutes.js
├── server.js
├── package.json
└── README.md
```

## Setup

```bash
npm install
npm start
```

Development mode:

```bash
npm run dev
```

Server: `http://localhost:3000`

## Endpoints

| Method | URL | Description | Success |
|---|---|---|---|
| GET | `/students` | List students | 200 |
| GET | `/students/:id` | Find student | 200 |
| POST | `/students` | Add student | 201 |
| PUT | `/students/:id` | Update student | 200 |
| DELETE | `/students/:id` | Delete student | 200 |

## POST / PUT body

```json
{
  "name": "Riya Sharma",
  "age": 20,
  "course": "BCA",
  "email": "riya@example.com"
}
```

## Error cases

- `400` invalid ID or invalid/missing fields
- `404` student or route not found
- `500` unexpected server error

## Testing

Use Postman or Thunder Client. Test both successful and invalid requests, including:

1. GET all students
2. GET an existing student
3. GET with an invalid ID such as `/students/abc`
4. GET a missing student such as `/students/999`
5. POST a valid student
6. POST with missing fields
7. PUT an existing student
8. DELETE an existing student
9. Request an unsupported URL
