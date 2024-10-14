import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Menu from './Component/Menu';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Beauty from './Component/Beauty/Beauty';
import Books from './Component/Books/Books';
import Electronics from './Component/Electronics/Electronics';
import Grocery from './Component/Grocery/Grocery';
import Kitchen from './Component/Kitchen/Kitchen';
import Toys from './Component/Toys/Toys';
import Clothing from './Component/Clothing/Clothing';
import Category from './Component/Category/Category';
import AddToCard from './Component/AddToCard/AddToCard';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Menu/><Home/></>
    },
    {
      path:"/login",
      element:<><Menu/><Login/></>
    },
    {
      path:"/books",
      element:<><Menu/><Books/></>
    },
    {
      path:"/electonics",
      element:<><Menu/><Electronics/></>
    },
    {
      path:"/grocery",
      element:<><Menu/><Grocery/></>
    },
    {
      path:"/kitchen",
      element:<><Menu/><Kitchen/></>
    },
    {
      path:"/toys",
      element:<><Menu/><Toys/></>
    },
    {
      path:"/beauty",
      element:<><Menu/><Beauty/></>
    },
    {
      path:"/clothing",
      element:<><Menu/><Clothing/></>
    },
    {
      path:"/category",
      element:<><Menu/><Category/></>
    },
    {
      path:"/addtocard",
      element:<><Menu/><AddToCard/></>
    },
  ])

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
}

export default App;
