import axios from "axios";

const instance = axios.create({
  baseURL: "https://digital-wallet-server-tau.vercel.app/",
});

// Token interceptor only once

const useAxiosSecure = () => {
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  return instance;
};

export default useAxiosSecure;
