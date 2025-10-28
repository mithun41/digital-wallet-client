import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: "https://digital-wallet-server-tau.vercel.app/",
  baseURL: "http://localhost:5000/",
});

axiosSecure.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosSecure;
