import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";
import Loading from "../Components/loading/Loading";
import Error from "../Components/Error/Error";

const PrivetRoute = ({ children }) => {
  // const location = useLocation();
  // const { user, loading, error } = useSelector((state) => state.auth);

  // if (loading) {
  //   return <Loading />;
  // }

  // if (error) {
  //   return <Error />;
  // }

  // // If no user, redirect to login and store current path for redirect after login
  // if (!user) {
  //   return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  // }

  // If user exists, render the protected content
  return children;
};

export default PrivetRoute;
