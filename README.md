# Website to generate the Islamic content into Openai GPT model

## Table of Contents

- [Full-Stack Project with Node.js, Express.js, MongoDB, React.js, TypeScript, Tailwind CSS, Redux Toolkit, and Formik](#full-stack-project-with-nodejs-expressjs-mongodb-reactjs-typescript-tailwind-css-redux-toolkit-and-formik)
  - [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Project Structure](#project-structure)
  - [Project Structure](#project-structure-1)
  - [Backend (Node.js \& Express.js)](#backend-nodejs--expressjs)
  - [Frontend (React.js)](#frontend-reactjs)

## Getting Started

To get started with this full-stack project, follow these steps:

1. Clone the repository.
2. Install dependencies for both the backend and frontend. for backend `npm install` and for fronend `pnpm install`.
3. Set up MongoDB and configure the connection in the backend, DB Key in .env file must be `MONGODB_URL`
4. To run the backend server in dev mode use `npm run dev`, to build the backend server use `npm run build` then run `npm start`.
5. To run the frontend in dev mode use `npm run dev`, to build the frontend use `npm run build` then run `npm run preview`.

## Prerequisites

Before you begin, ensure you have installed the following:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

### Project Structure

Describe the overall structure of your project.

```markdown
## Project Structure

- `backend/`: MVC and SPA.
- `frontend/`: SPA.

## Backend (Node.js & Express.js)

- **API Routes**:

  - Endpoint:
    -- Path: /api/v1/gpt/contents
    -- HTTP Method: POST
  - Request Body:
    -- The API expects a JSON object in the request body with the following fields:
    --- websiteName: A string representing the name of the website.
    --- websiteDescription: A string containing the description of the website.
    ---target: A field, possibly a string or another data type, representing the target user or audience for the website.

- **Middleware**:
  - In the backend server, we have 3 middleware to validate data entered from frontend.
    -- createValidation for body
    -- fineAllValidation for qery params
    -- fineOneValidation for params

## Frontend (React.js)

- **Dumb Components**: src/lib/shared/ui.
- **Smart Components**: src/module.
```
