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

  // ✅ Fetch user if token exists
  useEffect(() => {
    if (token && !user) {
      dispatch(fetchUser());
    }
  }, [token, user, dispatch]);

  if (token && loading) {
    return <Loading />;
  }

  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* ✅ Custom background */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-50 bg-base-100" />

      {/* ✅ Navbar hide in dashboard */}
      {!isDashboard && <Navbar />}

      {/* ✅ Content */}
      <main
        className={`flex-1 relative z-10 dark:bg-gray-900  ${
          !isDashboard ? "pt-16" : ""
        }`}
      >
        <Outlet />
      </main>

      {/* ✅ Footer hide in dashboard */}
      {!isDashboard && <Footer />}
    </div>
  );
};

export default RootLayout;
