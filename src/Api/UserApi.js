import {userApi} from "../Utils/Api"

export async function UserReg(credentials){
    try {
        console.log('in apisuer/usereg');
       const data = await userApi.post('/signup',credentials)
       return data
    } catch (error) {
       console.log(error.message);
    }
}

 export async function UserLogin(details) {
   try {
    console.log('in userlogin'+details);
     const data = await userApi.post("/login", details);
     return data;
   } catch (error) {
     console.log(error);
   }
 }