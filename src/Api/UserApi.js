import axios from "axios";

const userApi = axios.create({
  baseURL: `http://localhost:8080`,
});

userApi.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    console.log("intersrptor");
    req.headers.Authorization = "Bearer" + localStorage.getItem("token");
  }
  console.log("not the if of interseptor");
  return req;
});

export async function RegUser(credentials){
    try {
       const data = await userApi.post('/signup',credentials)
       return data
    } catch (error) {
       console.log(error);
    }
}

 