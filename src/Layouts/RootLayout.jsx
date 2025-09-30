import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/features/authSlice";
import Loading from "../Components/loading/Loading";

const RootLayout = () => {
  const dispatch = useDispatch();
  const { token, user, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token && !user) {
      dispatch(fetchUser());
    }
  }, [token, user, dispatch]);

  if (token && loading) {
    return <Loading />;
  }

  return (
    <div className="relative">
      {/* ✅ Custom background শুধু এই Layout এ থাকবে */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-50 circuit-background" />

      <Navbar />

      {/* ✅ content সবসময় background এর উপরে */}
      <div className="relative z-10 dark:bg-gray-900 pt-16">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
