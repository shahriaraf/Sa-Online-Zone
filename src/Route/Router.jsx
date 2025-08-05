import {
  createBrowserRouter,

} from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage.jsx/Home";



export const router = createBrowserRouter([
  {
    path: "/",
    element : <MainLayout></MainLayout>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
          {
            path : '/',
            element : <Home></Home>
          },
    
    ]
  },
]);