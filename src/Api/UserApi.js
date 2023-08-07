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

 export async function UpdateImage(id,img){
  try {
    const formData = new FormData()
    formData.append('image',img)
    formData.append('userId',id)
    const config = {
      header: {
        "content-type": "multipart/form-data",
        userId: id,
      },
      WithCreadentials: true,
    }
    const data = await userApi.post("/imgupdate",formData,config)
    return data
  } catch (error) {
    console.log(error);
  }
 }