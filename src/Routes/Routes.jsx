import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { 
        index: true, Component: Home
      },
      {
        path:'/login',
        Component: Login
      },
      {
        path:'/Register',
        Component: Register
      }

    ],
  }
]);
