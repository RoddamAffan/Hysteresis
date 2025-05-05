import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import Login from './Login.jsx';
import AboutUs from './AboutUs.jsx';
import ContactUs from './ContactUs.jsx';
import Counter from './Counter.jsx';
import Error from './Error.jsx';
const Router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    errorElement:<Error/>,
  },
  {
    path:"/login",
    element:<Login/>,
    errorElement:<Error/>,
  },
  {
    path:"/aboutUs",
    element:<AboutUs/>,
    errorElement:<Error/>
  },
  {
    path:"/contactUs",
    element:<ContactUs/>,
    errorElement:<Error/>
  },
  {
    path:"/counter",
    element:<Counter/>,
    errorElement:<Error/>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}/>
 </StrictMode>,
)
