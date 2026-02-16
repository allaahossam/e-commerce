"use server"
import { loginType } from "@/Types/login.type"
import { cookies } from "next/headers"

import { toast } from "sonner"

export const login = async (data:loginType)=>{
  try {
    
    const MyCookies = await cookies()
    MyCookies.set("token" , finalData.token , {
      maxAge: 60*60*24,
      httpOnly:true,
      sameSite:"strict"
    })
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