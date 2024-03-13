import React from 'react';
import './App.css';
import { Start } from './pages/Start';
import { Board } from './pages/Board/Board';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Start />,
  },
  {
    path: '/board',
    element: <Board />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
