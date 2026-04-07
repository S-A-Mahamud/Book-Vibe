import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import ErrorPages from '../Pages/ErrorPages/ErrorPages';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ListedBooks from '../Pages/ListedBooks/ListedBooks';



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
      },
      {
        path: '/listedBooks',
        Component: ListedBooks,
      },
      {
        path: '/bookDetails/:bookId',
        loader: () => fetch('/BooksData.json'),
        Component: BookDetails,
      }
    ],
  }
])