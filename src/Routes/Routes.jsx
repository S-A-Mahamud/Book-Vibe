import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import ErrorPages from '../Pages/ErrorPages/ErrorPages';



export const router = createBrowserRouter ([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPages/>,
    children: [
      {
        index: true,
        loader: () => fetch('/BooksData.json'),
        path:'/',
        Component: Home,
      }
    ],
  }
])