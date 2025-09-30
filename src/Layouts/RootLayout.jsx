import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/features/authSlice";
import Loading from "../Components/loading/Loading";

const RootLayout = () => {
  const dispatch = useDispatch();
  const { token, user, loading } = useSelector((state) => state.auth);
  const location = useLocation();

  useEffect(() => {
    if (token && !user) {
      dispatch(fetchUser());
    }
  }, [token, user, dispatch]);

  if (token && loading) {
    return <Loading />;
  }

  // ✅ Dashboard এ থাকলে Root Navbar দেখাবো না
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboard && <Navbar />}
      <main className="flex-1 dark:bg-gray-900 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
