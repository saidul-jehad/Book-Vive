import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './layout/Roots';
import Home from './Pages/Home/Home';
import ListedBooks from './Pages/ListedBooks/ListedBooks';
import PagesToRead from './Pages/PagesToRead/PagesToRead';
import BookDetails from './component/BookDetails/BookDetails';
import Error from './Pages/Error/Error'
import AboutUs from './Pages/ListedBooks/AboutUs/AboutUs';
import OnlyBooks from './Pages/OnlyBooks/OnlyBooks';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<Error></Error> ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('https://saidul24.github.io/books-json-data/books.json')
      },
      {
        path: '/PToRead',
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('https://saidul24.github.io/books-json-data/books.json')
      },
      {
        path: '/onlyBooks',
        element: <OnlyBooks></OnlyBooks>
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
      }
    ],


  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
