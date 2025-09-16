import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Auth from "../Pages/authintication/Auth";
import SignIn from "../Pages/authintication/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [{ index: true, Component: Home }],
  },
  {
    path: '/auth',
    Component: Auth,
    children: [
      {
        path: '/auth/login',
        Component: SignIn
      }
    ]
  }
]);
