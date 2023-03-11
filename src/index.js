import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import LoginPage from './components/LoginPage';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import TaskPage from './components/TaskPage';
import ProfilePage from './components/ProfilePage'
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "LoginPage",
    element: <LoginPage />,
  },
  {
    path: "Signup",
    element: <Signup />,
  },
  {
    path: "HomePage",
    element: <HomePage />,
  },
  {
    path: "TaskPage",
    element: <TaskPage />,
  },
  {
    path: "ProfilePage",
    element: <ProfilePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
