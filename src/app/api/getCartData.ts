"use server"

import axios from "axios"
import { getMyToken } from "./auth/[...nextauth]/getMyToken"

export async function getLoggedCart() {

    
        const token = await getMyToken()
        
    
    const{data}= await axios.get(`https://ecommerce.routemisr.com/api/v2/cart` , {
        headers:{
            token: `${token}`
        }
    })
    return data
}