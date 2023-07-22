import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import AddressData from './components/AddressData';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';
import './index.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/address',
    element: <AddressData />,
  },

], {
  basename: process.env.PUBLIC_URL,
});

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
