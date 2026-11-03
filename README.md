
# Get YouTube Subscribers

### AlmaBetter Capstone Project

A backend application built with **Node.js, Express.js, and MongoDB** to retrieve YouTube subscriber information through APIs.

This project demonstrates the practical implementation of backend development concepts, including database integration, API routing, data retrieval, and error handling.

## Features

- Retrieve all YouTube subscriber records.
- Get subscriber names along with their subscribed channel names.
- Retrieve a specific subscriber using their unique ID.
- Store and manage subscriber data using MongoDB.
- Handle invalid subscriber IDs and missing records with appropriate error responses.

## How to Run Locally

Follow these steps to set up and run the project on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/divyansh349/get-youtube-subscribers.git
```

### 2. Navigate to the Project Directory

```bash
cd get-youtube-subscribers
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root directory and add your MongoDB connection string:

```env
DATABASE_URL=your_mongodb_connection_string
```

Replace the placeholder with your MongoDB connection string. Keep your database credentials private and never upload your `.env` file to GitHub.

### 5. Start the Application

Run the following command:

```bash
npm start
```

### 6. Access the Application

Once the server starts, open your browser or API testing tool and visit:

- **Homepage:** `http://localhost:3000`
- **All Subscribers:** `http://localhost:3000/subscribers`
- **Subscriber Names:** `http://localhost:3000/subscribers/names`
- **Subscriber by ID:** `http://localhost:3000/subscribers/<subscriber_id>`

Replace `<subscriber_id>` with an actual subscriber ID from the database.

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**

## Project Structure

```text
get-youtube-subscribers/
│
├── src/
│   ├── models/
│   │   └── subscribers.js
│   ├── app.js
│   ├── createDatabase.js
│   ├── data.js
│   └── index.js
│
├── appConfig.js
├── index.html
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## API Documentation

The following APIs endpoints are available in this project.

### 1. Get All Subscribers

- **Method:** `GET`
- **Endpoint:** `/subscribers`
- **Description:** Retrieves all subscriber records from the database.

### 2. Get Subscriber Names

- **Method:** `GET`
- **Endpoint:** `/subscribers/names`
- **Description:** Retrieves subscriber names and their subscribed channel names.

### 3. Get Subscriber by ID

- **Method:** `GET`
- **Endpoint:** `/subscribers/:id`
- **Description:** Retrieves a specific subscriber using their unique ID.
Replace `<subscriber_id>` with an actual subscriber ID from the database.
- **Error Handling:** Returns an error response if the provided ID is invalid or the subscriber is not found.

### Base URL

**Local:**

[http://localhost:3000](http://localhost:3000)

## Deployment

The application is deployed on Render and can be accessed using the following link:

**Live Application:** https://get-youtube-subscribers-8mc5.onrender.com

## Project Author

**Divyansh Shrivastava**
