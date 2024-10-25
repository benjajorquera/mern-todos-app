# To-Do Application using MERN Stack

This project is a simple To-Do application that demonstrates how to build a full-fledged CRUD (Create, Read, Update, and Delete) application from scratch using the MERN stack (MongoDB, Express.js, React, and Node.js).

## Features

- Create, read, update, and delete tasks
- User-friendly interface for managing tasks
- Responsive design for an optimal user experience

## Getting Started

Follow the tutorial series to learn how to set up and develop this application step by step, gaining hands-on experience with each component of the MERN stack.

## Installing MondoDB (v8)

Make sure that MongoDB is installed on your system. On MacOS this task can be completed by using the following command:

$ brew install mongodb

If you have Chocolatey on Windows:

$ choco install mongodb

Or if you’re working on Windows or Linux follow the installation instructions from <https://docs.mongodb.com/manual/administration/install-community/>.

On Windows, make sure that the MongoDB bin folder is located in the system PATH environment variables, it is likely to be located in ProgramFiles.

Create a data directory which is used by MongoDB:

$ mkdir -p /data/db

Ensure that the user account running mongod has read and write permissions for the directory.

Download Mongo Shell (v2.3) from <https://www.mongodb.com/try/download/shell>

Start up MongoDB by executing the following command:

$ mongod

In another terminal run the mongoshell, you can add it to your system environment variables or run the .exe from the download:

$ mongosh

Create Todos database:

$ use todos

## Configure DB

Configure connection in backend/server.js. The DB runs by default on mongodb://127.0.0.1:27017/todos

## Scripts

### Install server and client dependencies

````npm install````
````npm run setup-backend````

### Run server and client concurrently

````npm run dev````

## References

[Sebastian, Coding The Smart Way](https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/)

[Digamber](https://www.positronx.io/react-mern-stack-crud-app-tutorial/)

## About

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
