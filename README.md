## React App for Displaying Records

- This is a React application that serves as a frontend for displaying records fetched from a Node.js backend. The application uses Redux Toolkit for state management and React Router for navigation.

# Prerequisites

- Make sure you have the following installed on your machine:
  Node.js
- Also make sure that Node Js backend server is running (CD to web-app and node app.js)

# Installation

1. Navigate to the React app directory:
   \*\* cd client
2. Install dependencies:

- npm install

3. Run

- npm start
- The app will be running at http://localhost:3000 by default. Open your web browser and navigate to this URL to view the application.

## Ensure the Node.js server is running on port 5001:

- This application is designed to display records retrieved from the Node.js server. If your Node.js server is running on a port other than the default (5001), you can modify the base API port by updating the configuration in api/psetsApi.js. Locate the baseURL variable in psetsApi.js and set it to the appropriate port where your Node.js server is running.

# Pages

- /: Home page.
- /psets-database: Display records from the local MongoDB database.

# Dependencies

React: A JavaScript library for building user interfaces.
React Router: Declarative routing for React.js.
Redux Toolkit: For state management.

# Folder Structure

src/components: Contains React components used in the application.
src/features: Redux Slice for API Interaction

- The file (apiSlice.js) defines a Redux slice responsible for managing API interactions within your React application. It utilizes the @reduxjs/toolkit library to streamline the process of creating Redux logic.

src/App.js: The main component that sets up the routes.
src/App.css: Styles for the table component.
