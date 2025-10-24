import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router";
import { useEffect } from "react";
import { fetchUser } from "../redux/features/authSlice";
import Loading from "../Components/loading/Loading";

const PrivetRoute = ({ children }) => {
  const { user, loading, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (!user && token) {
      dispatch(fetchUser());
    }
  }, [dispatch, user, token]);

  if (loading) return <Loading />;

  if (!user && !token) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default PrivetRoute;
