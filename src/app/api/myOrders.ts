"use server"
import axios from "axios";
import { getMyToken } from "./auth/[...nextauth]/getMyToken";
import { jwtDecode } from "jwt-decode";


export async function getUserOrders() {
    
     const token = await getMyToken()

     const userData = jwtDecode(token)

     console.log("userData" , userData);
     

     const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userData.id}`)

     return data
}