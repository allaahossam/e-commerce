"use server"

import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"




 export async function getMyToken(){

 const Mycookies = await cookies()

 const tokenFromCookies = Mycookies.get("next-auth.session-token")?.value

 console.log("tokenFromCookies" , tokenFromCookies);
 
 const decodedToken = await decode({token : tokenFromCookies , secret : process.env.NEXTAUTH_SECRET!})

 console.log("decodedToken" , decodedToken.realToken);

 return decodedToken.realToken
 
 }