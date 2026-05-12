import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://alosodt.com/api",
});

// Global error handler
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || "Something went wrong";
    return Promise.reject(new Error(message));
  },
);

export default axiosInstance;
