# The Reading List App

Welcome to **The Reading List App**! This is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to help you manage your reading list. 

The primary goal of this project is to practice state management using the Context API and React hooks, as well as to persist state using `localStorage`. 

Additionally, the app connects to a MongoDB database to provide a complete full-stack experience.

## Features

- **Add Books**: Easily add books to your reading list by providing the title and author.
- **View Books**: View a list of all the books you have added.
- **Remove Books**: Remove books from your reading list.
- **Persist State**: The app uses `localStorage` to persist the state, so your reading list is saved even if you refresh the page.
- **Context API**: State management is handled using the Context API and React hooks, providing a modern and scalable way to manage state in React applications.
- **Full-Stack**: The app connects to a MongoDB database, making it a full-stack MERN application.

## Technologies Used

- **Frontend**: React, Context API, React Hooks, Tailwind CSS, shadcn/ui, Lucide React icons
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **State Persistence**: `localStorage`
- **Development Tools**: Vite, ESLint, Concurrently, Nodemon

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB (You can use MongoDB Atlas for a cloud-based solution as I did)

### Installation

1. **Clone the repository**:

```sh
git clone https://github.com/eme-lie/thereadinglist.git
cd thereadinglist
```

2. **Install dependencies**:

```sh
npm install
cd frontend
npm install
```

3. **Set up environment variables**:

Create a 

.env

 file in the 

backend

 directory with the following content:

```env
NODE_ENV=development
PORT=4000
MONGO_URI=your_mongodb_connection_string
REACT_APP_API_BASE_URL=http://localhost:5173
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string and your frontend url if it is different from mine.

4. **Run the application**:

navigate to the root directory and run 

```sh
npm run dev
```

This will start both the backend server and the frontend development server concurrently.

### Usage

- Open your browser and navigate to [`http://localhost:5173`].
- Add, view, and remove books from your reading list.
- The state of your reading list will be persisted using `localStorage`.

## Encouragement for Beginners

If you are a beginner looking to learn full-stack development, this project is a great starting point. It covers essential concepts such as:

- Setting up a React application with Vite
- Using the Context API and React hooks for state management
- Persisting state with `localStorage`
- Building a RESTful API with Node.js and Express
- Connecting to a MongoDB database with Mongoose

Feel free to clone this repository, explore the code, and make your own modifications. Understanding how each part of the application works will give you a solid foundation in full-stack development.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please open an issue or submit a pull request.

Happy coding! 🚀

---

Feel free to customize this content further to better suit your needs.
