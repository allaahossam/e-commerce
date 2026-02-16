import { RegisterType } from "@/Types/register.type"
import { toast } from "sonner"

export const register = async (data:RegisterType)=>{
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup` , {
      method:"post",
      body:JSON.stringify(data),
      headers:{
        "content-type":"application/json"
      },
    })
    const finalData = await res.json()
    if(!res.ok){
      toast.error(finalData.message , {position:"top-center"})
    }
    toast.success("User Added Succesfuly" , {position:"top-center"}
    )
    return true
    
  } catch (error) {
    console.log(error);
    return null
    
  }
}