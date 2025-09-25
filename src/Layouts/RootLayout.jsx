import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/features/authSlice";
import Loading from "../Components/loading/Loading";

const RootLayout = () => {
  const dispatch = useDispatch();
  const { token, user, loading } = useSelector((state) => state.auth); // ✅ loading স্টেটটি যোগ করা হয়েছে

  useEffect(() => {
    if (token && !user) {
      dispatch(fetchUser());
    }
  }, [token, user, dispatch]);

  // ✅ নতুন লজিক: লোডিং অবস্থায় একটি লোডিং স্ক্রিন দেখাও
  if (token && loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
