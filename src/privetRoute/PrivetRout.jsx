import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/features/authSlice';
import Loading from '../Components/loading/Loading';
import Login from '../Pages/Login/Login';
import Error from '../Components/Error/Error';
import { useLocation } from 'react-router';

const PrivetRoute = ({children}) => {
    // const dispatch = useDispatch()

    const location = useLocation()
    console.log(location);

    const {user, loading, error} = useSelector((state) => state.auth);

    // useEffect(() => {
    
    //     if (!user) {
    //       dispatch(fetchUser());
    //     } 
    //   }, [dispatch, user]);

    console.log(user);
    if(error){
      return <Error></Error>
    }

      if(loading){
        return <Loading></Loading>
      }

      if(!user){
        location.state = location.pathname
        return <Login></Login>
      }

      console.log(location);

    return children;
};

export default PrivetRoute;