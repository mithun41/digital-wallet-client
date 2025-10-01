import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../redux/features/authSlice';
import Loading from '../Components/loading/Loading';
import Login from '../Pages/Login/Login';

const PrivetRoute = ({children}) => {
    const dispatch = useDispatch()

    const {user, loading, error} = useSelector((state) => state.auth);

    useEffect(() => {
    
        if (!user) {
          dispatch(fetchUser());
        } 
      }, [dispatch, user]);

      if(loading){
        return <Loading></Loading>
      }

      if(user){
        return <Login></Login>
      }

    return children;
};

export default PrivetRoute;