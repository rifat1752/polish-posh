
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Pages/Home/Home";
import AddProduct from "../Components/Pages/AddProduct/AddProduct";
import Cart from "../Components/Pages/Cart/Cart";
const router = createBrowserRouter([
    {
        path: "/",
       element: <Root></Root>,
       children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/addproduct",
          element: <AddProduct></AddProduct>
        },
        {
          path:"/cart",
          element: <Cart></Cart>
        }
       ]
      }
])

export default router;