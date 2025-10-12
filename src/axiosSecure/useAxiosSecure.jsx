import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:5000/',
});


const useAxiosSecure = () => {
  const token = localStorage.getItem('token')
  instance.interceptors.request.use((Config) => {

    if(token){
      Config.headers.Authorization = `Bearer ${token}`
    }
    
    return Config
  })
  return instance
};

export default useAxiosSecure;