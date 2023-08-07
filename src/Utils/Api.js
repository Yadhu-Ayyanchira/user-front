import axios from "axios";

export const userApi = axios.create({
  baseURL: "http://localhost:4000",
});

userApi.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    console.log("interceptor");
    req.headers.Authorization = "Bearer" + localStorage.getItem("token");
    return req;
  }

  console.log("not the if of interceptor");
  return req;
});
