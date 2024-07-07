import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About.tsx';
import Replacement from './pages/Replacement.tsx';
import Policy from './pages/Policy.tsx';

const router = createBrowserRouter([
  { path: "/", element: <About /> },
  { path: "/troca", element: <Replacement /> },
  { path: "/politica", element: <Policy /> },
  { path: "*", element: <App /> },
  { path: "*", element: <App /> },
  { path: "*", element: <App /> },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
